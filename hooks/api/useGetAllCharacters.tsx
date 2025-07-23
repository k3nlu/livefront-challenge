import { getDisneyCharacters } from "@/api/characters";
import { Character, GetAllCharactersResponse } from "@/api/characters/models";
import { getPageFromQueryParams } from "@/utils/getPageFromQueryParams/getPageFromQueryParams";
import {
  DefinedInitialDataInfiniteOptions,
  InfiniteData,
  useInfiniteQuery,
} from "@tanstack/react-query";

type useGetAllCharactersOptions = DefinedInitialDataInfiniteOptions<
  GetAllCharactersResponse,
  Error,
  InfiniteData<GetAllCharactersResponse>,
  string[],
  number
>;

type useGetAllCharactersParams = {
  options?: useGetAllCharactersOptions;
};

export const useGetAllCharacters = (params?: useGetAllCharactersParams) => {
  const res = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: ({ pageParam }) => {
      return getDisneyCharacters(pageParam);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.info.nextPage) {
        const nextPage = getPageFromQueryParams(lastPage.info.nextPage);
        return nextPage;
      }
      return undefined;
    },
    initialPageParam: 1,
    ...params?.options,
  });

  const listData = res.data?.pages.reduce((acc, curr) => {
    curr.data.forEach((character) => {
      acc.push(character);
    });
    return acc;
  }, [] as Character[]);

  return {
    ...res,
    listData: listData || [],
  };
};
