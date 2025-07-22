import { useGetAllCharacters } from "@/hooks/useGetAllCharacters";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Gallery = () => {
  const insets = useSafeAreaInsets();
  const getAllCharactersQuery = useGetAllCharacters();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <FlatList
        data={getAllCharactersQuery.listData}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        onEndReached={() => {
          if (getAllCharactersQuery.hasNextPage) {
            getAllCharactersQuery.fetchNextPage();
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Gallery;
