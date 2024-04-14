import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import UpperHome from "../components/UpperHome";
import {
  PaperSVG,
  DarkArrowRight,
  LightArrowRight,
  AddSVG,
  MagnifySVG,
  ImageSVG,
  RememberSVG,
} from "../utils/Svg";
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

export default function IncorrectAns(props) {
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
  const no = props.no;
  return (
    <>
      {fontsLoaded && (
        <View style={styles.chatContainer}>
          <View style={styles.imageContainer}>
            <Text style={styles.imageText}>👩🏻‍⚕️</Text>
          </View>
          <View style={{ flexDirection: "column", width: 270 }}>
            <Text style={styles.greetingText}>SENIOR DOCTOR</Text>
            <Text style={styles.correctText}>
              Metaphase 1 is not quite right!
            </Text>
            <Text style={styles.welcomeText}>{props.text}</Text>
            <ImageSVG />
            <View style={{ flexDirection: "row" }}>
              <Pressable style={styles.subContainer}>
                <RememberSVG />
                <Text style={styles.subText}> Remember This</Text>
              </Pressable>
              <View style={styles.subContainer}>
                <MagnifySVG />
                <Text style={styles.subText}> Go deeper</Text>
              </View>
            </View>
            <Link href={"/quiz/" + (parseInt(no) + 1)}>
              <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                  See the {parseInt(no) + 1} patient
                </Text>
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
    color: "#F55652",
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
