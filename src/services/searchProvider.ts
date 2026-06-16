import { searchMods as searchModrinth } from "./api/modrinth";

export async function searchProvider(
  query: string,
  offset = 0
) {
  try {
    return await searchModrinth(query, offset);
  } catch (error) {
    console.error(error);

    return {
      hits: [],
      source: "offline",
    };
  }
}
