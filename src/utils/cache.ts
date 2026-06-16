export function cacheSet(
  key: string,
  value: unknown
) {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

export function cacheGet<T>(
  key: string,
  fallback: T
): T {

  const value = localStorage.getItem(key);

  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value);
  } catch {

    return fallback;

  }

}
