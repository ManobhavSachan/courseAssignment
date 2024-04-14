import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import UpperHome from "../components/UpperHome";
import { PaperSVG, DarkArrowRight } from "../utils/Svg";
import {
  useFonts,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_400Regular,
} from "@expo-google-fonts/rubik";
import { Link } from "expo-router";
import AskDoubt from "../components/AskDoubt";
import { useState } from "react";
import UpperBar from "../components/UpperBar";

export default function Start() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
  });
  const [text, setText] = useState("");
  const handleTextChange = (newText) => {
    // console.log(newText);
    setText(newText);
  };
  return (
    <>
      <StatusBar hidden />
      <UpperHome />
      {fontsLoaded && (
        <View style={styles.container}>
          <View style={styles.chatContainer}>
            <View style={styles.imageContainer}>
              <Text style={styles.imageText}>👩🏻‍⚕️</Text>
            </View>
            <View style={{ flexDirection: "column", width: 270 }}>
              <Text style={styles.greetingText}>SENIOR DR. PRIYA</Text>
              <Text style={styles.welcomeText}>
                You are right on time Dr. Shreya!
              </Text>
              <Text style={styles.welcomeText}>
                We have 20 patients that are waiting to be diagnosed today.
              </Text>
              <Text style={styles.welcomeText}>
                Don't worry, I am there to guide and help you learn. You can
                learn along with me.
              </Text>
              <Link href="/quiz/1">
                <Pressable style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>See the 1st patient</Text>
                  <DarkArrowRight />
                </Pressable>
              </Link>
              <AskDoubt onTextChange={handleTextChange} />
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B58",
    alignItems: "center",
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    marginTop: -10,
  },
  chatContainer: {
    flexDirection: "row",
    marginTop: 69,
    marginHorizontal: 39,
    gap: 19,
  },
  greetingText: {
    // marginTop: 63,
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "Rubik_400Regular",
    lineHeight: 18,
    marginBottom: 4,
  },
  welcomeText: {
    // marginTop: -1,
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Rubik_500Medium",
    lineHeight: 21,
    marginBottom: 25,
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
    // lineHeight: 45,
  },
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
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 12.62,
    fontFamily: "Rubik_500Medium",
    lineHeight: 18.94,
    color: "#101828",
    // alignSelf: "center",
  },
});
