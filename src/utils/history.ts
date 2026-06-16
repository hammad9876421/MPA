const KEY = "history";

export function getHistory(): string[] {

  return JSON.parse(
    localStorage.getItem(KEY) ?? "[]"
  );

}

export function addHistory(query: string) {

  const data = getHistory();

  data.unshift(query);

  localStorage.setItem(
    KEY,
    JSON.stringify(
      [...new Set(data)].slice(0, 20)
    )
  );

}
