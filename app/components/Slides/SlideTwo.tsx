import React from "react";
import SharedSlide from "./SharedSlide";

const SlideTwo = () => {
  return (
    <SharedSlide
      image={require("../../../assets/slide-two.jpg")}
      text={"The Best ESport Community and Game Organizer For You"}
      textStyle={{
        fontSize: 20,
        fontFamily: "Oswald_700Bold",
      }}
    />
  );
};

export default SlideTwo;
