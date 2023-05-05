import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Bangers_400Regular } from "@expo-google-fonts/bangers";
import { Oswald_700Bold } from "@expo-google-fonts/oswald";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IS_APP_LAUNCHED } from "./utils/constants";
import { SplashScreen } from "expo-router";
import GameSelection from "./onboarding/game-selection";
import Signup from "./onboarding/signup";


export default function Index() {
  // UI hooks
  const [isAppLaunched, setIsAppLaunched] = useState<string>();

  // Function to check if it's the first time launching the app
  const loadAppAsync = async () => {
    try {
      const _isAppLaunched = await AsyncStorage.getItem(IS_APP_LAUNCHED);
      setIsAppLaunched(_isAppLaunched);
    } catch (err) {
      console.log("Error ", err);
    }
  };

  // Function to load the fonts
  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
    Oswald_700Bold,
  });

  useEffect(() => {
    loadAppAsync();
  }, []);




  if (!fontsLoaded || isAppLaunched === undefined) {
    return <SplashScreen />
  }
  return (
      isAppLaunched !== "true" ? (
        <Signup/>
      ) : (
        <GameSelection/>
      )
  )
}