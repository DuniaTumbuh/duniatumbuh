export const PLANT_REGISTRY_SCHEMA_VERSION = "1.0";

const registry = new Map();

export function registerPlant(manifest) {
  validatePlantManifest(manifest);
  if (registry.has(manifest.id)) throw new Error(`Duplicate plant id: ${manifest.id}`);
  registry.set(manifest.id, Object.freeze(structuredClone(manifest)));
}

export function getPlant(id) {
  return registry.get(id) ?? null;
}

export function listPlants({ status = "active" } = {}) {
  return [...registry.values()].filter(p => status === null || p.status === status);
}

export function validatePlantManifest(p) {
  const required = ["schemaVersion","id","name","contentVersion","status","growthModel","entryMissionId","extensions"];
  for (const key of required) if (!(key in p)) throw new Error(`Missing plant field: ${key}`);
  if (p.schemaVersion !== PLANT_REGISTRY_SCHEMA_VERSION) throw new Error("Unsupported plant schemaVersion");
  if (!/^[a-z0-9-]+$/.test(p.id)) throw new Error("Invalid plant id");
  if (!Array.isArray(p.growthModel) || p.growthModel.length < 2) throw new Error("growthModel requires >=2 stages");
  if (!["draft","review","approved","active","retired"].includes(p.status)) throw new Error("Invalid plant status");
  return true;
}
