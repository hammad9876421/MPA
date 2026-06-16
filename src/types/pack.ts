import type { ModItem } from "./mod";

export interface Pack {

  id: string;

  name: string;

  minecraftVersion: string;

  loader: string;

  installPath: string;

  mods: ModItem[];

  health: number;

  createdAt: number;

  updatedAt: number;

}
