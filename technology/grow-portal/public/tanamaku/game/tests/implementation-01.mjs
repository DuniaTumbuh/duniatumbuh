import { registerPlant, getPlant, listPlants, validatePlantManifest } from "../core/plant-registry.js";
import { createJourney, journeyAgeDays, confirmStageFromObservation } from "../core/journey-engine.js";

const assert = (condition, message) => {
  if (!condition) throw new Error("Test failed: " + message);
};

const tomat = {
  schemaVersion: "1.0",
  id: "tomat",
  name: "Tomat",
  contentVersion: "0.1",
  status: "active",
  growthModel: ["seed", "sprout", "leaf", "flower", "fruit", "harvest"],
  entryMissionId: "tomat-plant-seed-001",
  extensions: { food: null, ar: "/ar/tomat", adventure: null, ai: null, stem: null }
};

const extensionCandidate = {
  schemaVersion: "1.0",
  id: "extension-test",
  name: "Extension Test",
  contentVersion: "0.0-test",
  status: "draft",
  growthModel: ["seed", "sprout", "young-leaf", "harvest"],
  entryMissionId: "extension-test-plant",
  extensions: { food: null, ar: null, adventure: null, ai: null, stem: null }
};

validatePlantManifest(tomat);
registerPlant(tomat);
assert(getPlant("tomat").name === "Tomat", "registry read-back");
assert(listPlants().length === 1, "active registry filter");

const journey = createJourney({
  journeyId: "test-001",
  plant: tomat,
  plantingDate: "2026-09-01"
});
assert(journey.currentStage === "seed", "journey starts at seed");

journeyAgeDays(journey, new Date("2026-09-30T12:00:00"));
assert(journey.currentStage === "seed", "elapsed time cannot mutate stage");

const unchanged = confirmStageFromObservation(journey, tomat, { confirmedStage: null });
assert(unchanged.currentStage === "seed", "non-stage observation leaves stage unchanged");

const advanced = confirmStageFromObservation(journey, tomat, { confirmedStage: "sprout" });
assert(advanced.currentStage === "sprout", "confirmed observation advances stage");
assert(journey.currentStage === "seed", "transition does not mutate source journey");

registerPlant(extensionCandidate);
assert(getPlant("extension-test").growthModel.includes("young-leaf"), "new plant shape registers without core edit");
assert(listPlants({ status: "draft" }).length === 1, "draft package remains non-active");

console.log("GAME-001 IMPLEMENTATION-01: PASS");
