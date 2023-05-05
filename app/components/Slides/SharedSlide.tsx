import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { SharedSlideProps } from "../../utils/types";

const SharedSlide = ({
  image,
  text,
  textWrapperStyle,
  textStyle,
  children,
}: SharedSlideProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={[styles.textWrapper, {...textWrapperStyle}]}>
            <Text style={[styles.text, { ...textStyle }]}>{text}</Text>
            {children}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9DD6EB",
  },
  image: {
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: Dimensions.get("screen").width / 6,
    width: "80%",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    lineHeight: 25,
  },
});

export default SharedSlide;
