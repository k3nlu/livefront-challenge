import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface LoaderProps extends ActivityIndicatorProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export const Loader = (props: LoaderProps) => {
  const { containerStyle, ...activityIndicatorProps } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size="large" {...activityIndicatorProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
