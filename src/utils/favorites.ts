const KEY = "favorites";

export function getFavorites(): string[] {

  return JSON.parse(
    localStorage.getItem(KEY) ?? "[]"
  );

}

export function addFavorite(id: string) {

  const data = getFavorites();

  if (!data.includes(id)) {

    data.push(id);

  }

  localStorage.setItem(
    KEY,
    JSON.stringify(data)
  );

}
