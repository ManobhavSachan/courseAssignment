import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function AskDoubt({ onTextChange }) {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
    onTextChange(newText); // Call the callback function with the updated text
  };

  return (
    <TextInput
      style={styles.buttonContainer}
      placeholder="Ask a Doubt"
      placeHolderTextColor="#9FA2A9"
      value={text}
      onChangeText={handleTextChange}
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 31,
    borderRadius: 5.52,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    width: "100%",
    height: 37.08,
    justifyContent: "space-between",
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
});
