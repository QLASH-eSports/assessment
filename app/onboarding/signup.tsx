import { Stack, useNavigation } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IS_ONBOARDING_SKIPPED } from "../utils/storageKeys";

export default function Signup() {
  const navigation = useNavigation();
  const options = {
    headerShown: false,
  };

  const onPressDone = async () => {
    try {
      await AsyncStorage.setItem(IS_ONBOARDING_SKIPPED, "true");
      navigation.reset({
        routes: [
          {
            name: "onboarding/game-selection",
          },
        ],
      });
    } catch (e) {
      console.log("Cannot set IS_NEW_USER to false", e);
    }
  };

  return (
    <>
      <Stack.Screen options={options} />
      <Onboarding
        showSkip={false}
        bottomBarHighlight={false}
        showNext={false}
        pages={[
          {
            backgroundColor: "#202020",
            subtitle: "Welcome to QLASH  Community App",
            image: (
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../../assets/logo.png")}
              />
            ),
          },
          {
            backgroundColor: "#202020",
            title: "Engage",
            subtitle: "Join the community and find new friends to play with",
          },
          {
            backgroundColor: "#202020",
            title: "Compete",
            subtitle: "Enroll now in you favorite games competitions and win!",
          },
        ]}
        DoneButtonComponent={() => (
          <TouchableOpacity onPress={onPressDone}>
            <Ionicons
              name="checkmark-circle"
              style={styles.icon}
              size={45}
              color="#6d6d6d"
            />
          </TouchableOpacity>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
  icon: {
    marginRight: 8,
  },
});
