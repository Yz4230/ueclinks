import { Favorites, FLink } from "./types";

const normalizeString = (targetString: string) =>
  targetString
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s: string) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    )
    .replace("　", " ");

const isURL = (targetString: string) =>
  /^https?:\/\/([0-9a-z-]+\.)+[a-z]+/.test(targetString);

const loadFavorites = (): Favorites => {
  const raw = localStorage.getItem("favorites");
  if (raw) return JSON.parse(raw);
  else {
    saveFavorites([]);
    return [];
  }
};

const saveFavorites = (favorites: Favorites) =>
  localStorage.setItem("favorites", JSON.stringify(favorites));

const addToFavorites = (link: FLink) => {
  const favorites = loadFavorites();
  favorites.push(link);
  saveFavorites(favorites);
};

const removeFromFavorites = (link: FLink) => {
  const favorites = loadFavorites();
  const updatedFavorites = favorites.filter((l) => l.id !== link.id);
  saveFavorites(updatedFavorites);
};

const boolToInt = (value: boolean) => (value ? 1 : 0);

const createInInitialFavorites = () => {
  const initialFavoriteIds = loadFavorites().map((l) => l.id);
  return (link: FLink) => initialFavoriteIds.includes(link.id);
};

const inInitialFavorites = createInInitialFavorites();

export {
  normalizeString,
  isURL,
  loadFavorites,
  addToFavorites,
  removeFromFavorites,
  boolToInt,
  inInitialFavorites,
};
