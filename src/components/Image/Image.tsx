import { useState } from 'react';
import { ImageProps, Image as RNImage } from 'react-native';

const placeholderImage =
  'https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png';

interface ImagePropsWithError extends Omit<ImageProps, 'source'> {
  uri?: string;
}

export const Image = (props: ImagePropsWithError) => {
  const [imageError, setImageError] = useState(false);

  const imageUrl = props.uri || placeholderImage;

  return (
    <RNImage
      {...props}
      source={{ uri: imageError ? placeholderImage : imageUrl }}
      onError={(e) => {
        if (props.onError) {
          props.onError(e);
        }
        setImageError(true);
      }}
    />
  );
};
