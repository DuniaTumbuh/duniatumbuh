export const STORAGE_SCHEMA_VERSION = "1.0";
export const DEFAULT_STORAGE_KEY = "dt.tanamaku.game";

export function createMemoryStorage(seed = {}) {
  const data = new Map(Object.entries(seed));
  return {
    getItem: key => data.has(key) ? data.get(key) : null,
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: key => data.delete(key)
  };
}

export function createEmptyState(engineVersion = "1.0") {
  return { schemaVersion: STORAGE_SCHEMA_VERSION, engineVersion, journeys: {}, settings: {} };
}

export function loadState(storage, key = DEFAULT_STORAGE_KEY) {
  const raw = storage.getItem(key);
  if (!raw) return createEmptyState();
  let parsed;
  try { parsed = JSON.parse(raw); } catch { throw new Error("Corrupt journey storage"); }
  return migrateState(parsed);
}

export function saveState(storage, state, key = DEFAULT_STORAGE_KEY) {
  const safe = migrateState(structuredClone(state));
  storage.setItem(key, JSON.stringify(safe));
  return safe;
}

export function upsertJourney(state, journey) {
  if (!journey?.journeyId) throw new Error("Journey id required");
  const copy = structuredClone(state);
  copy.journeys[journey.journeyId] = structuredClone(journey);
  return copy;
}

export function appendJournalEntry(journey, entry) {
  if (!entry?.id || !entry?.type || !entry?.createdAt) throw new Error("Invalid journal entry");
  const copy = structuredClone(journey);
  if (copy.journal.some(x => x.id === entry.id)) return copy;
  copy.journal.push(structuredClone(entry));
  return copy;
}

export function migrateState(state) {
  if (!state || typeof state !== "object") throw new Error("Invalid journey state");
  const copy = structuredClone(state);
  if (!copy.schemaVersion) copy.schemaVersion = "1.0";
  if (copy.schemaVersion !== STORAGE_SCHEMA_VERSION) throw new Error("Unsupported storage schemaVersion");
  copy.engineVersion ??= "1.0";
  copy.journeys ??= {};
  copy.settings ??= {};
  return copy;
}
