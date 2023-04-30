import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { IS_ONBOARDING_SKIPPED } from "./utils/storageKeys";

export default function Index() {
  const [isOnBoardingSkipped, setIsOnBoardingSkipped] = useState<string>();

  const _onLoad = async () => {
    try {
      const _isOnBoardingSkipped = await AsyncStorage.getItem(
        IS_ONBOARDING_SKIPPED
      );
      setIsOnBoardingSkipped(_isOnBoardingSkipped);
    } catch (e) {
      console.log("Cannot get IS_ONBOARDING_SKIPPED", e);
    }
  };

  useEffect(() => {
    _onLoad();
  }, []);

  if (isOnBoardingSkipped === undefined) {
    return <ActivityIndicator />;
  }

  if (isOnBoardingSkipped !== "true") {
    return <Redirect href="onboarding/signup" />;
  }

  return <Redirect href={"onboarding/game-selection"} />;
}
