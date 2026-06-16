import { useMemo, useState } from "react";
import { mockMods } from "../data/mockMods";

export function useInfiniteMods() {
  const [page, setPage] = useState(1);

  const mods = useMemo(() => {
    return mockMods.slice(0, page * 100);
  }, [page]);

  function loadMore() {
    setPage((p) => p + 1);
  }

  return {
    mods,
    loadMore,
    page,
  };
}
