import { api } from "../apiHelper";
import { GetAllCharactersResponse } from "./models";

export const getDisneyCharacters = async (page: number) => {
  const res = await api.get<GetAllCharactersResponse>(
    `/character?page=${page}&pageSize=50`
  );
  return res;
};

export const getDisneyCharacterById = async (id: string) => {
  const res = await api.get(`/character/${id}`);
  return res;
};
