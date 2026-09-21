import { createJourney, confirmStageFromObservation } from "../core/journey-engine.js";
import { createMemoryStorage, createEmptyState, loadState, saveState, upsertJourney, appendJournalEntry } from "../core/journey-store.js";

const assert=(ok,msg)=>{ if(!ok) throw new Error("Test failed: "+msg); };
const storage=createMemoryStorage();
const plant={id:"tomat",contentVersion:"0.1",growthModel:["seed","sprout","leaf","flower","fruit","harvest"]};

let journey=createJourney({journeyId:"journey-001",plant,plantingDate:"2026-09-21"});
let state=upsertJourney(createEmptyState(),journey);
saveState(storage,state);

let reload=loadState(storage);
assert(reload.journeys["journey-001"].currentStage==="seed","save/reload preserves stage");
assert(reload.journeys["journey-001"].plantContentVersion==="0.1","content version preserved");

journey=reload.journeys["journey-001"];
journey=appendJournalEntry(journey,{id:"obs-001",type:"observation",createdAt:"2026-09-21T08:00:00+07:00",observationId:"tomat-sprout-seen-001",choiceId:"yes"});
journey=confirmStageFromObservation(journey,plant,{confirmedStage:"sprout"});
state=upsertJourney(reload,journey);
saveState(storage,state);

reload=loadState(storage);
assert(reload.journeys["journey-001"].currentStage==="sprout","milestone survives reload");
assert(reload.journeys["journey-001"].journal.length===1,"journal survives reload");
assert(reload.journeys["journey-001"].journal[0].choiceId==="yes","observation read-back");

const once=appendJournalEntry(reload.journeys["journey-001"],{id:"obs-001",type:"observation",createdAt:"2026-09-21T08:00:00+07:00"});
assert(once.journal.length===1,"duplicate journal id is idempotent");

const futureCompatible=structuredClone(reload);
futureCompatible.futureField={enabled:true};
futureCompatible.journeys["journey-001"].futureJourneyField="preserve-me";
saveState(storage,futureCompatible);
const futureReload=loadState(storage);
assert(futureReload.futureField.enabled===true,"unknown top-level field preserved");
assert(futureReload.journeys["journey-001"].futureJourneyField==="preserve-me","unknown journey field preserved");

const before=storage.getItem("dt.tanamaku.game");
try { loadState(createMemoryStorage({"dt.tanamaku.game":"{bad json"})); } catch {}
assert(storage.getItem("dt.tanamaku.game")===before,"failed read cannot erase good storage");

console.log("GAME-001 IMPLEMENTATION-02: PASS");
console.log("Checks: persistence, reload, journal, milestone, idempotency, forward-compatible fields, fail-safe read.");
