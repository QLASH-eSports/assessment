import React from "react";
import SharedSlide from "./SharedSlide";
import { Dimensions } from "react-native";

const SlideOne = () => {
  return (
    <SharedSlide
      image={require("../../../assets/slide-one.webp")}
      text={"Welcome To Qlash"}
      textWrapperStyle={{
        marginBottom: Dimensions.get("screen").width / 5,
      }}
      textStyle={{
        fontSize: 30,
        fontFamily: "Bangers_400Regular",
      }}
    />
  );
};

export default SlideOne;
