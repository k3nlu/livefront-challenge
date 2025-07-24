export type PageInfo = {
  totalPages: number;
  count: number;
  previousPage: string | null;
  nextPage: string | null;
};

export type Character = {
  _id: number;
  url: string;
  name: string;
  imageUrl?: string;
  sourceUrl?: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
};

export interface GetAllCharactersResponse {
  info: PageInfo;
  data: Character[];
}

export interface GetCharacterByIdResponse {
  info: PageInfo;
  data: Character;
}
