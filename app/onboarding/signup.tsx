import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Signup() {
  const options = {
    title: "Signup",
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={options} />
      <Link style={styles.button} href="/onboarding/game-selection" asChild>
        <Text>to game selection</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
	button: {
		borderWidth: 1,
		borderColor: 'black',
		padding: 15,
		borderRadius: 5,
	}
});
