const KEY = "library";

export function getLibrary(): string[] {

  return JSON.parse(
    localStorage.getItem(KEY) ?? "[]"
  );

}

export function addLibrary(id: string) {

  const data = getLibrary();

  if (!data.includes(id)) {

    data.push(id);

  }

  localStorage.setItem(
    KEY,
    JSON.stringify(data)
  );

}
