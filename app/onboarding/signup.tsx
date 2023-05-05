import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import SlideOne from "../components/Slides/SlideOne";
import SlideThree from "../components/Slides/SlideThree";
import SlideFour from "../components/Slides/SlideFour";
import SlideTwo from "../components/Slides/SlideTwo";

export default function Signup() {
  const options = {
    headerShown: false,
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={options} />
      <Swiper
        dotColor={"rgba(255,255,255,.7)"}
        activeDotColor={"#6BF3E7"}
        showsButtons={false}
      >
        <SlideOne />
        <SlideTwo />
        <SlideThree />
        <SlideFour />
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
