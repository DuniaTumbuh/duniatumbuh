import { appendJournalEntry, upsertJourney, saveState } from "./journey-store.js";
import { confirmStageFromObservation } from "./journey-engine.js";

export function completeMission({ state, journeyId, mission, eventId, createdAt }) {
  const journey=state.journeys[journeyId];
  if(!journey) throw new Error("Journey not found");
  if(!mission?.id || !eventId || !createdAt) throw new Error("Invalid mission transaction");
  if(journey.missions.some(x=>x.eventId===eventId || x.missionId===mission.id)) return structuredClone(state);

  const copy=structuredClone(journey);
  copy.missions.push({eventId,missionId:mission.id,completedAt:createdAt});
  copy.stars += Number(mission.reward?.stars || 0);
  const withJournal=appendJournalEntry(copy,{
    id:eventId,type:"mission",createdAt,missionId:mission.id,stars:Number(mission.reward?.stars || 0)
  });
  return upsertJourney(state,withJournal);
}

export function recordObservation({ state, journeyId, plant, observation, choiceId, eventId, createdAt }) {
  const journey=state.journeys[journeyId];
  if(!journey) throw new Error("Journey not found");
  if(!observation?.id || !choiceId || !eventId || !createdAt) throw new Error("Invalid observation transaction");
  if(journey.observations.some(x=>x.eventId===eventId)) return structuredClone(state);

  const choice=observation.choices?.find(x=>x.id===choiceId);
  if(!choice) throw new Error("Unknown observation choice");

  let copy=structuredClone(journey);
  copy.observations.push({eventId,observationId:observation.id,choiceId,createdAt});
  copy=appendJournalEntry(copy,{
    id:eventId,type:"observation",createdAt,observationId:observation.id,choiceId
  });
  copy=confirmStageFromObservation(copy,plant,{confirmedStage:choice.confirmedStage ?? null});
  return upsertJourney(state,copy);
}

export function commitTransaction(storage,state,key) {
  return saveState(storage,state,key);
}
