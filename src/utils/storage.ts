export function save(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load<T>(key: string, fallback: T): T {
  const data = localStorage.getItem(key);

  if (!data) {
    return fallback;
  }

  try {
    return JSON.parse(data);
  } catch {
    return fallback;
  }
}
