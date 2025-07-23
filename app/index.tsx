import { CharacterList } from "@/components/character/CharacterList/CharacterList";
import { Loader } from "@/components/Loader/Loader";
import { useGetAllCharacters } from "@/hooks/api/useGetAllCharacters";
import { StyleSheet, View } from "react-native";

const Gallery = () => {
  const getAllCharactersQuery = useGetAllCharacters();
  const { isLoading, isFetching } = getAllCharactersQuery;

  return (
    <View style={[styles.container]}>
      {isLoading && <Loader />}
      {!isLoading && (
        <CharacterList
          isFetching={isFetching}
          data={getAllCharactersQuery.listData}
          onEndReached={() => {
            if (getAllCharactersQuery.hasNextPage) {
              getAllCharactersQuery.fetchNextPage();
            }
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Gallery;
