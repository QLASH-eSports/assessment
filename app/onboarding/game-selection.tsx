
import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function GameSelection() {
  const options = {
    title: "Game Selection",
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={options} />
      <Link style={styles.button} href="/home/home" asChild>
        <Text>to home</Text>
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
