import React, { useState } from "react";
import { Link, Stack, useRouter, useSearchParams } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { GAMES } from "../data/games";

export default function GameSelection() {
  const { email } = useSearchParams();
  const [gameSelected, setGameSelected] = useState("");
  const options = {
    title: "Game Selection",
  };
  const router = useRouter();
  function renderGameItem(item: any) {
    return (
      <TouchableOpacity onPress={() => setGameSelected(item.name)}>
        <View
          style={
            gameSelected === item.name
              ? [styles.gameContainer, { backgroundColor: "white" }]
              : styles.gameContainer
          }
        >
          <Text style={[styles.info, { fontWeight: "bold" }]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  function handleNavigation() {
    router.push("/home/home");
    router.setParams({ email: email, gameSelected: gameSelected });
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={options} />
      <Text style={styles.header}>
        Email : <Text style={styles.info}>{email}</Text>
      </Text>
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => renderGameItem(item)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation()}
      >
        <Text style={styles.buttonText}>HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
    justifyContent: "space-between",
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  info: {
    color: "#17b1f3",
    marginHorizontal: 20,
  },
  gameContainer: {
    flex: 1,
    alignItems: "center",
    borderColor: "#17b1f3",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 8,
  },
  buttonText: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    margin: 2,
    backgroundColor: "#17b1f3",
  },
});
