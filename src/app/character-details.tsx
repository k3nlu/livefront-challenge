import { Image } from '@/src/components/Image/Image';
import { InfoCard } from '@/src/components/InfoCard/InfoCard';
import { Loader } from '@/src/components/Loader/Loader';
import { spacing } from '@/src/constants';
import { useGetCharacter } from '@/src/hooks/api/useGetCharacter';
import { Title } from '@/src/typography';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CharacterDetailsParams = {
  id: string;
};

const CharacterDetails = () => {
  const { id } = useLocalSearchParams<CharacterDetailsParams>();
  const { data: characterData, isLoading } = useGetCharacter(id);
  const insets = useSafeAreaInsets();
  const { data } = characterData || {};
  const {
    imageUrl,
    name,
    films,
    shortFilms,
    tvShows,
    videoGames,
    parkAttractions,
    allies,
    enemies,
  } = data || {};
  if (isLoading) {
    return <Loader />;
  }

  if (!characterData || !data) {
    return null;
  }

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContent,
        { paddingBottom: insets.bottom },
      ]}
    >
      <Image uri={imageUrl} style={styles.image} testID="character-image" />
      <View style={styles.content}>
        {name && (
          <Title style={styles.title} testID="character-name">
            {name}
          </Title>
        )}
        {films && <InfoCard title="Films" infoItems={films} />}
        {shortFilms && <InfoCard title="Short Films" infoItems={shortFilms} />}
        {tvShows && <InfoCard title="TV Shows" infoItems={tvShows} />}
        {videoGames && <InfoCard title="Video Games" infoItems={videoGames} />}
        {parkAttractions && (
          <InfoCard
            title="Park Attractions"
            infoItems={parkAttractions}
            testID="park-attractions"
          />
        )}
        {allies && <InfoCard title="Allies" infoItems={allies} />}
        {enemies && <InfoCard title="Enemies" infoItems={enemies} />}
      </View>
    </ScrollView>
  );
};

export default CharacterDetails;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    rowGap: spacing.md,
  },
  title: {
    marginVertical: spacing.md,
  },
});
