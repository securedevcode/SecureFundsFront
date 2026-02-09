type Entry = {
  lastSent: number;
};

const store = new Map<string, Entry>();

const ONE_DAY = 24 * 60 * 60 * 1000;

export function canSend(key: string) {
  const now = Date.now();

  const record = store.get(key);

  if (!record) {
    store.set(key, { lastSent: now });
    return true;
  }

  if (now - record.lastSent > ONE_DAY) {
    store.set(key, { lastSent: now });
    return true;
  }

  return false;
}

export function getRemainingTime(key: string) {
  const record = store.get(key);

  if (!record) return 0;

  const diff = Date.now() - record.lastSent;

  return Math.max(0, ONE_DAY - diff);
}
