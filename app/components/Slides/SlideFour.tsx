import { Dimensions } from "react-native";
import React from "react";
import Button from "../common/Button";
import SharedSlide from "./SharedSlide";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import { IS_APP_LAUNCHED } from "../../utils/constants";

const SlideFour = () => {
  const navigation = useNavigation();

  const onPress = async () => {
    try {
      await AsyncStorage.setItem(IS_APP_LAUNCHED, "true");
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
    <SharedSlide
      image={require("../../../assets/slide-four.webp")}
      text={"Are You Ready?"}
      textWrapperStyle={{
        marginBottom: Dimensions.get("screen").width / 7,
      }}
      textStyle={{
        fontSize: 30,
        fontFamily: "Bangers_400Regular",
      }}
    >
      <Button title="Get Started" onPress={onPress} />
    </SharedSlide>
  );
};

export default SlideFour;
