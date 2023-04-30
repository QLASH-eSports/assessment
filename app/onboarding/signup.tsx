import { Link, Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Signup() {
  const options = {
    title: "Signup",
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={options} />
      <View style={styles.rootContainer}>
        <Text style={styles.header}>
          If you don't have an account, we will create one for you.
        </Text>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name={"email"}
            size={25}
            color={"#848d937f"}
            style={styles.icon}
          />
          <Link
            href={{
              pathname: "/onboarding/signin",
              params: { name: "Sign in" },
            }}
            asChild
          >
            <Text style={styles.text}>Sign in with email</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  rootContainer: {
    margin: 10,
  },
  header: {
    marginBottom: 30,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
    color: "#848d937f",
  },

  button: {
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
});

{
  /* <Link style={styles.button} href="/onboarding/game-selection" asChild>
        <Text>to game selection</Text>
      </Link> */
}
