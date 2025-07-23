import { getDisneyCharacterById } from "@/api/characters";
import { GetCharacterByIdResponse } from "@/api/characters/models";
import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

type UseGetCharacterOptions = UndefinedInitialDataOptions<
  GetCharacterByIdResponse,
  Error,
  GetCharacterByIdResponse,
  string[]
>;

export const useGetCharacter = (
  id: string,
  options?: UseGetCharacterOptions
) => {
  const query = useQuery({
    queryKey: ["character", id],
    queryFn: () => getDisneyCharacterById(id),
    staleTime: 1000 * 60 * 5,
    ...options,
  });

  return query;
};
