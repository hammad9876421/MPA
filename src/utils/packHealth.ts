import type { ModItem } from "../types/mod";

export function calculatePackHealth(mods: ModItem[]) {
  if (mods.length === 0) {
    return 100;
  }

  const ids = new Set(mods.map((mod) => mod.id));

  const duplicatePenalty = mods.length - ids.size;

  return Math.max(0, 100 - duplicatePenalty * 10);
}
