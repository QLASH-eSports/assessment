import React from "react";
import { StyleSheet, Text } from "react-native";

function ErrorMessage({ error }) {
  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: { color: "red", fontSize: 14 },
});

export default ErrorMessage;
