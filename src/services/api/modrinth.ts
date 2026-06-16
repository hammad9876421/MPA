import { api } from "./client";
import { API } from "../../constants/api";

export async function searchMods(
  query: string,
  offset = 0
) {

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
