import { colors, radius, spacing } from "@/constants";
import { Body, Label } from "@/typography";
import { StyleSheet, View, ViewProps } from "react-native";

interface InfoCardProps extends ViewProps {
  title?: string;
  infoItems?: string[];
}

export const InfoCard = (props: InfoCardProps) => {
  const { title, infoItems, style, ...viewProps } = props;
  if (!infoItems || infoItems.length === 0) {
    return null;
  }

  return (
    <View {...viewProps} style={[styles.container, styles.dropShadow, style]}>
      {title && <Body style={styles.body}>{title}</Body>}
      {infoItems && infoItems.length > 0 && (
        <View style={styles.infoContainer}>
          {infoItems.map((item, index) => (
            <View key={index} style={styles.infoItem}>
              <Label>-</Label>
              <Label>{item}</Label>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
    rowGap: spacing.sm,
  },
  dropShadow: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 4,
  },
  body: {
    fontWeight: "500",
  },
  infoContainer: {
    rowGap: spacing.sm,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: spacing.xs,
  },
});
