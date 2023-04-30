import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link, Stack, useSearchParams } from "expo-router";

const tips = (props: any) => {
  const { email, password } = useSearchParams();
  const options = {
    title: "Tips",
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={options} />
      <Link style={styles.button} href="/onboarding/signup" asChild>
        <Text>to game selection</Text>
      </Link>
      <Text>{email}</Text>
    </View>
  );
};

export default tips;

const styles = StyleSheet.create({
  container: {},
  button: {
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    borderRadius: 5,
  },
});
