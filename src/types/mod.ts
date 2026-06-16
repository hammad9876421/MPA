export interface ModItem {
  id: string;

  name: string;

  description: string;

  author: string;

  version: string;

  minecraftVersion: string;

  loader: string;

  categories: string[];

  downloads: number;

  icon: string;

  banner: string;

  installed: boolean;

  favorite: boolean;
}
