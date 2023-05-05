import React from "react";
import SharedSlide from "./SharedSlide";

const SlideThree = () => {
  return (
    <SharedSlide
      image={require("../../../assets/slide-three.jpeg")}
      text={"Join us to Build your team and participate in world class"}
      textStyle={{
        fontSize: 20,
        fontFamily: "Oswald_700Bold",
      }}
    />
  );
};

export default SlideThree;
