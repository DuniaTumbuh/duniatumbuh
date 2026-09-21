export const JOURNEY_SCHEMA_VERSION = "1.0";
export const ENGINE_VERSION = "1.0";

export function createJourney({ journeyId, plant, plantingDate }) {
  if (!journeyId || !plant?.id || !plantingDate) throw new Error("Invalid journey input");
  return {
    schemaVersion: JOURNEY_SCHEMA_VERSION,
    engineVersion: ENGINE_VERSION,
    journeyId,
    plantId: plant.id,
    plantContentVersion: plant.contentVersion,
    plantingDate,
    currentStage: plant.growthModel[0],
    observations: [],
    missions: [],
    journal: [],
    badges: [],
    stars: 0,
    unlockedExperiences: []
  };
}

export function journeyAgeDays(journey, today = new Date()) {
  const start = new Date(journey.plantingDate + "T00:00:00");
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.max(0, Math.floor((end - start) / 86400000));
}

export function confirmStageFromObservation(journey, plant, observationRule) {
  if (!observationRule?.confirmedStage) return structuredClone(journey);
  const next = observationRule.confirmedStage;
  if (!plant.growthModel.includes(next)) throw new Error("Observation references unknown stage");
  const copy = structuredClone(journey);
  copy.currentStage = next;
  return copy;
}

// Intentionally no timer-based stage advancement API.
