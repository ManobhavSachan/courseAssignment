import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import UpperHome from "../components/UpperHome";
import { PaperSVG, DarkArrowRight, LightArrowRight, AddSVG, MagnifySVG } from "../utils/Svg";
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

export default function CorrectAns() {
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
  const [flag, setFlag] = useState(false);  

  return (
    <>
      {fontsLoaded && (
        <View style={styles.chatContainer}>
          <View style={styles.imageContainer}>
            <Text style={styles.imageText}>👩🏻‍⚕️</Text>
          </View>
          <View style={{ flexDirection: "column", width: 270 }}>
            <Text style={styles.greetingText}>SENIOR DOCTOR</Text>
            <Text style={styles.correctText}>You’re right Dr. Shreya!</Text>
            <Text style={styles.welcomeText}>
              Osteoporosis is a common condition in elderly patients, especially
              those who have been physically inactive. It leads to weakened
              bones that are more susceptible to fractures from minimal trauma,
              such as a fall from bed. The fractures described, including the
              femoral head fracture and the compression fracture of the T10
              vertebra, are characteristic of osteoporosis.
            </Text>
            <View style={{flexDirection: 'row'}}>
            <Pressable style={styles.subContainer}>
                <AddSVG />
              <Text style={styles.subText}> Add to Backpack</Text>
            </Pressable>
            <View style={styles.subContainer}>
                <MagnifySVG />
              <Text style={styles.subText}> Go deeper</Text>
            </View>
            </View>
            <Link href="/quiz">
              <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>See the 1st patient</Text>
                <LightArrowRight />
              </Pressable>
            </Link>
            <AskDoubt onTextChange={handleTextChange} />
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
  correctText: {
    // marginTop: -1,
    color: "#276587",
    fontSize: 12,
    fontFamily: "Rubik_500Medium",
    lineHeight: 18,
    marginVertical: 20,
    // marginBottom: 25,
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
    backgroundColor: "#414167",
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
    marginBottom: -20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 12.62,
    fontFamily: "Rubik_500Medium",
    lineHeight: 18.94,
    opacity: 0.8,
    alignSelf: "center",
  },
  subContainer: {
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: "#F1F1F1",
    height: 20,
    paddingHorizontal: 6,
    marginRight: 20,
    marginTop: 20,
    marginLeft: "auto",
  },
  subText: {
    fontFamily: "Rubik_400Regular",
    fontSize: 12,
    color: "#4F4F4F",
    opacity: 0.8,
    lineHeight: 18,
    textAlign: "right",
  },
});