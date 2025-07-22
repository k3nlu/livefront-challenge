import { Character } from "@/api/characters/models";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  PressableProps,
  StyleSheet,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SCREEN_WIDTH / 3;

interface CharacterListItemProps extends PressableProps {
  character: Character;
}

const placeholderImage =
  "https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png";

export const CharacterListItem = (props: CharacterListItemProps) => {
  const { character, ...rest } = props;
  const [imageError, setImageError] = useState(false);
  const imageUrl = character.imageUrl || placeholderImage;
  return (
    <Pressable {...rest} style={styles.container}>
      <Image
        onError={() => setImageError(true)}
        source={{ uri: imageError ? placeholderImage : imageUrl }}
        style={styles.image}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { width: ITEM_WIDTH },
  image: {
    width: "100%",
    height: 175,
  },
});
