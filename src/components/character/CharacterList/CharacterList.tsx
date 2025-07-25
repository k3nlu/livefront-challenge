import { Character } from "@/src/api/characters/models";
import { Loader } from "@/src/components/Loader/Loader";
import { spacing } from "@/src/constants";
import { router } from "expo-router";
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
      renderItem={({ item, index }) => {
        const onPress = () => {
          router.push({
            pathname: "/character-details",
            params: { id: item._id },
          });
        };
        return (
          <CharacterListItem
            character={item}
            onPress={onPress}
            testID={`character-item-${index}`}
          />
        );
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
