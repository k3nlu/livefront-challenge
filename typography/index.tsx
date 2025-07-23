import { StyleSheet, Text, TextProps } from "react-native";

export const Title = (props: TextProps) => {
  return <Text {...props} style={[styles.title, props.style]} />;
};

export const Body = (props: TextProps) => {
  return <Text {...props} style={[styles.body, props.style]} />;
};

export const Label = (props: TextProps) => {
  return <Text {...props} style={[styles.label, props.style]} />;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    fontWeight: "normal",
  },
  label: {
    fontSize: 14,
    fontWeight: "normal",
  },
});
