import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
// import { View } from "react-native-web";
import { QuestionSVG } from "../utils/Svg";

export default function AskInfo({ onTextChange }) {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
    onTextChange(newText); // Call the callback function with the updated text
  };

  return (
    <View style={styles.infoContainer}>
      <QuestionSVG />
      <TextInput
        style={styles.buttonContainer}
        placeholder="Ask for further info or hint"
        placeHolderTextColor="#9FA2A9"
        value={text}
        onChangeText={handleTextChange}
        multiline={true} 
        numberOfLines={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 10,
    borderRadius: 5.52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#3D3B3529",
    flexDirection: "row",
    marginLeft: 80,
    marginRight: 40,
    height: 37.08,
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#3D3B3529",
    shadowOffset: { width: 0, height: 0.79 },
    shadowRadius: 0,
    elevation: 4,
    paddingHorizontal: 12,
    color: "#FFFFFF",
    fontSize: 12.62,
    fontFamily: "Rubik_400Regular",
    lineHeight: 18.94,
    color: "#101828",
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlignVertical: "center",
  },
});
