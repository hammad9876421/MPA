import { useQuery } from "@tanstack/react-query";
import { searchMods } from "../services/api/modrinth";

export function useModrinthSearch(query: string) {

  return useQuery({

    queryKey: ["mods", query],

    queryFn: () => searchMods(query),

    staleTime: 300000,

  });

}
