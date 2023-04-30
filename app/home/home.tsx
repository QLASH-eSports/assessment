import { Link, Stack, useSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Signup() {
  const { email, gameSelected } = useSearchParams();

  const options = {
    title: "Home",
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={options} />
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.header}>User:</Text>
          <Text style={styles.header}>{email}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.header}>Game Selected:</Text>
          <Text style={styles.header}>{gameSelected}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  headerContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#17b1f3",
    padding: 4,
  },
  header: {
    color: "#17b1f3",
    fontSize: 18,
    textAlign: "center",
    margin: 5,
  },
});
