import { Stack } from "expo-router";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image, View } from "react-native";

function LogoTitle() {
  return (
    <View>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/logo.png")}
      />
    </View>
  );
}
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: () => <LogoTitle />,
        }}
      />
    </SafeAreaProvider>
  );
}
