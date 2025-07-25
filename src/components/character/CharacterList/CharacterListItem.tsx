import { Character } from '@/src/api/characters/models';
import { Image } from '@/src/components/Image/Image';
import {
  Dimensions,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SCREEN_WIDTH / 3;

interface CharacterListItemProps extends PressableProps {
  character: Character;
}

export const CharacterListItem = (props: CharacterListItemProps) => {
  const { character, ...pressableProps } = props;
  const imageUrl = character.imageUrl;

  return (
    <Pressable {...pressableProps} style={styles.container}>
      <Image uri={imageUrl} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { width: ITEM_WIDTH },
  image: {
    width: '100%',
    height: 175,
  },
});
