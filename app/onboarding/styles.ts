import { Dimensions, StyleSheet } from "react-native";

export default function onboardingStyles() {
  return StyleSheet.create({
    btn: {
      position: "absolute",
      bottom: 60,
    },
    itemContainer: {
      width: Dimensions.get("window").width,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
  });
}
