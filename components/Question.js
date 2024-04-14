import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Question({ no, text, options, onOptionSelect }) {
  const handleOptionSelect = (option) => {
    // Call the callback function with the selected option
    onOptionSelect(option);
  };

  return (
    <View style={styles.chatContainer}>
      <View style={styles.imageContainer}>
        <Text style={styles.imageText}>👩🏻‍⚕️</Text>
      </View>
      <View style={{ flexDirection: "column", width: 270 }}>
        <Text style={styles.greetingText}>
          Mrs. Amrita (Patient {parseInt(no) + 1})
        </Text>
        <Text style={styles.welcomeText}>{text}</Text>
        {options.map((option, index) => (
          <Pressable
            key={index}
            style={styles.buttonContainer}
            onPress={() => handleOptionSelect(option)}
          >
            <Text style={styles.buttonText}>{option}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    marginTop: 15,
    marginHorizontal: 27,
    gap: 19,
  },
  greetingText: {
    color: "#101828",
    fontSize: 12,
    fontFamily: "Rubik_400Regular",
    lineHeight: 18,
    opacity: 0.4,
    marginBottom: 1,
  },
  welcomeText: {
    color: "#101828",
    fontSize: 12,
    fontFamily: "Rubik_400Regular",
    lineHeight: 18,
  },
  imageContainer: {
    width: 37,
    height: 37,
    backgroundColor: "#7FB7F9",
    borderRadius: 4,
  },
  imageText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Rubik_400Regular",
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 5.52,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: "#3D3B3529",
    height: 37.08,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#101828",
    fontSize: 12.62,
    fontFamily: "Rubik_500Medium",
    lineHeight: 18.94,
    opacity: 0.8,
  },
});
