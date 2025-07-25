import { api } from '../apiHelper';
import { GetAllCharactersResponse, GetCharacterByIdResponse } from './models';

export const getDisneyCharacters = async (page: number) => {
  const res = await api.get<GetAllCharactersResponse>(
    `/character?page=${page}`,
  );
  return res;
};

export const getDisneyCharacterById = async (id: string) => {
  const res = await api.get<GetCharacterByIdResponse>(`/character/${id}`);
  return res;
};
