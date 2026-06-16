import { mockMods } from "../data/mockMods";

export function searchMods(query: string) {

  if (!query) {

    return mockMods;

  }

  return mockMods.filter((mod) =>
    mod.name.toLowerCase().includes(query.toLowerCase())
  );

}
