import { StyleSheet } from "react-native";

export default function signupStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    inputsContainer: {
      width: "100%",
      alignItems: "stretch",
    },
    errorTxt: {
      color: "red",
      marginLeft: 24,
    },
    submitBtn: {
      marginTop: 16,
    },
  });
}
