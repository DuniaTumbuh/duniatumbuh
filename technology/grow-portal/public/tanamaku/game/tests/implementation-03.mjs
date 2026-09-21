import { createJourney } from "../core/journey-engine.js";
import { createMemoryStorage, createEmptyState, loadState, saveState, upsertJourney } from "../core/journey-store.js";
import { completeMission, recordObservation, commitTransaction } from "../core/mission-engine.js";

const assert=(ok,msg)=>{if(!ok) throw new Error("Test failed: "+msg);};
const plant={id:"tomat",contentVersion:"0.1",growthModel:["seed","sprout","leaf","flower","fruit","harvest"]};
const mission={id:"tomat-check-soil-001",reward:{stars:1}};
const soil={id:"tomat-soil-moisture-001",choices:[{id:"moist"},{id:"dry"},{id:"unsure"}]};
const sprout={id:"tomat-sprout-seen-001",choices:[{id:"yes",confirmedStage:"sprout"},{id:"not-yet"},{id:"unsure"}]};
const storage=createMemoryStorage();

let state=createEmptyState();
state=upsertJourney(state,createJourney({journeyId:"j1",plant,plantingDate:"2026-09-21"}));
saveState(storage,state);

state=completeMission({state,journeyId:"j1",mission,eventId:"mission-event-1",createdAt:"2026-09-21T09:00:00+07:00"});
state=completeMission({state,journeyId:"j1",mission,eventId:"mission-event-1",createdAt:"2026-09-21T09:00:01+07:00"});
assert(state.journeys.j1.stars===1,"double click cannot award stars twice");
assert(state.journeys.j1.missions.length===1,"mission completion idempotent");

state=recordObservation({state,journeyId:"j1",plant,observation:soil,choiceId:"moist",eventId:"obs-event-1",createdAt:"2026-09-21T09:01:00+07:00"});
assert(state.journeys.j1.currentStage==="seed","soil observation cannot advance stage");

state=recordObservation({state,journeyId:"j1",plant,observation:sprout,choiceId:"yes",eventId:"obs-event-2",createdAt:"2026-09-21T09:02:00+07:00"});
assert(state.journeys.j1.currentStage==="sprout","confirmed sprout advances milestone");

commitTransaction(storage,state);
let reload=loadState(storage);
assert(reload.journeys.j1.stars===1,"reward survives reload");
assert(reload.journeys.j1.currentStage==="sprout","milestone survives reload");
assert(reload.journeys.j1.journal.length===3,"mission + two observations journaled");
assert(reload.journeys.j1.observations.length===2,"observations persist");

const before=JSON.stringify(reload);
reload=recordObservation({state:reload,journeyId:"j1",plant,observation:sprout,choiceId:"yes",eventId:"obs-event-2",createdAt:"2026-09-21T09:02:05+07:00"});
assert(reload.journeys.j1.observations.length===2,"refresh/replay cannot duplicate observation");
assert(reload.journeys.j1.journal.length===3,"refresh/replay cannot duplicate journal");

let invalidRejected=false;
try { recordObservation({state:reload,journeyId:"j1",plant,observation:soil,choiceId:"invalid",eventId:"bad",createdAt:"2026-09-21T09:03:00+07:00"}); }
catch { invalidRejected=true; }
assert(invalidRejected,"invalid choice rejected");
assert(JSON.stringify(reload)===JSON.stringify(JSON.parse(before)),"invalid transaction does not mutate state");

console.log("GAME-001 IMPLEMENTATION-03: PASS");
console.log("Checks: mission transaction, anti-double-reward, observation, journal, milestone, persistence, replay idempotency, invalid-choice fail-closed.");
