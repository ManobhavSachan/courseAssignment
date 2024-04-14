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

export default function Statement(props) {
    const no = props.no;
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
  });
  const [text, setText] = useState("");

  return (
    <>
      {fontsLoaded && (
        <View style={styles.chatContainer}>
          <View style={styles.imageContainer}>
            <Text style={styles.imageText}>👵🏽</Text>
          </View>
          <View style={{ flexDirection: "column", width: 270 }}>
            <Text style={styles.greetingText}>Mrs. Amrita (Patient {parseInt(no) + 1})</Text>
            <Text style={styles.welcomeText}>
              I am an 80-year-old woman with no major medical problems. Never
              been physically active for most of her life. Yesterday, I fell out
              of bed and immediately had a sharp pain in her left hip. I am
              since then not able to ambulate without severe pain.
            </Text>
          </View>
        </View>
      )}
    </>
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
    // marginTop: 63,
    color: "#101828",
    fontSize: 12,
    fontFamily: "Rubik_400Regular",
    lineHeight: 18,
    opacity: 0.4,
    marginBottom: 1,
  },
  welcomeText: {
    // marginTop: -1,
    color: "#101828",
    fontSize: 12,
    fontFamily: "Rubik_400Regular",
    lineHeight: 18,
    // marginBottom: 25,
  },
  imageContainer: {
    width: 37,
    height: 37,
    backgroundColor: "#FCEECF",
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
    alignItems: "flex-start",
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
