import { api } from "./client";
import { API } from "../../constants/api";
import type { ModrinthSearchResponse } from "../../types/modrinth";

export async function searchMods(
  query: string,
  offset = 0
): Promise<ModrinthSearchResponse> {

  const response = await api.get(

    `${API.MODRINTH}/search`,

    {

      params: {

        query,

        limit: API.SEARCH_LIMIT,

        offset,

      },

    }

  );

  return response.data;

}
