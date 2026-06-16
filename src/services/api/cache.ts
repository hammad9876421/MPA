const cache = new Map<string, unknown>();

export function getCache<T>(key: string): T | null {
  return (cache.get(key) as T) ?? null;
}

export function setCache(
  key: string,
  value: unknown
) {
  cache.set(key, value);
}

export function clearCache() {
  cache.clear();
}
