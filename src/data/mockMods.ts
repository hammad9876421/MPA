import type { ModItem } from "../types/mod";

export const mockMods: ModItem[] = [
  {
    id: "1",

    name: "Sodium",

    description: "Performance optimization",

    author: "JellySquid",

    version: "1.0.0",

    minecraftVersion: "1.21.1",

    loader: "NeoForge",

    categories: ["performance"],

    downloads: 12000000,

    icon: "",

    banner: "",

    installed: false,

    favorite: false,
  },

  {
    id: "2",

    name: "JEI",

    description: "Item viewer",

    author: "mezz",

    version: "18.0.0",

    minecraftVersion: "1.21.1",

    loader: "NeoForge",

    categories: ["utility"],

    downloads: 50000000,

    icon: "",

    banner: "",

    installed: false,

    favorite: false,
  },
];
