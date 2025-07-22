import { Character } from "@/api/characters/models";
import { Loader } from "@/components/Loader/Loader";
import { spacing } from "@/constants";
import { FlatList, FlatListProps, StyleSheet } from "react-native";
import { CharacterListItem } from "./CharacterListItem";

type CharacterListProps = Omit<FlatListProps<Character>, "renderItem"> & {
  isFetching?: boolean;
};

export const CharacterList = (props: CharacterListProps) => {
  const { data, isFetching } = props;

  return (
    <FlatList
      numColumns={3}
      {...props}
      data={data}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => {
        return <CharacterListItem character={item} />;
      }}
      ListFooterComponent={
        isFetching ? <Loader containerStyle={styles.loaderContainer} /> : null
      }
    />
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    paddingVertical: spacing.lg,
  },
});
