import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({
  icon,
  hiddenIcon,
  onPress,
  width = "100%",
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width: "100%" }]}>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={"#848d937f"}
          style={styles.icon}
        />

        <TextInput
          placeholderTextColor={"#848d937f"}
          style={styles.text}
          {...otherProps}
        />
      </View>
      {hiddenIcon && (
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            name={hiddenIcon}
            size={25}
            color={"#848d937f"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 8,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#17b1f3",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: "#848d937f",
  },
});

export default AppTextInput;
