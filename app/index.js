import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import UpperHome from "../components/UpperHome";
import { PaperSVG } from "../utils/Svg";
import {
  useFonts,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_400Regular,
} from "@expo-google-fonts/rubik";
import {Link} from 'expo-router';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
  });
  return (
    <>
      <StatusBar hidden />
      <UpperHome />
      {fontsLoaded && (
        <View style={styles.container}>
          <Text style={styles.greetingText}>Good afternoon, Dr. Shreya!</Text>
          <Text style={styles.welcomeText}>
            Welcome to the Oncourse Major Hospital
          </Text>
          <View style={{ flexDirection: "column", paddingHorizontal: 37 }}>
            <Text style={styles.instructionTitleText}>INSTRUCTIONS</Text>
            <Text style={styles.instructionText}>
              There are 20 patients waiting to see you. You need to quickly
              diagnose and move ahead with the help from a senior doctor.
            </Text>
          </View>
          <Link href="/start">
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>ENTER THE OPD ROOM</Text>
          </Pressable>
          </Link>
          <View style={{ width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 42,
                justifyContent: "space-between",
              }}
            >
              <View style={styles.subContainer}>
                <PaperSVG />
                <Text style={styles.subText}> 5 PYQ's</Text>
              </View>
              <View style={styles.subContainer}>
                <Text style={styles.subText}>😷 20 Patients</Text>
              </View>
              <View style={styles.subContainer}>
                <Text style={styles.subText}>⏱ 20 mins</Text>
              </View>
            </View>
          </View>
          <Text style={styles.bottomText}>
            Toppers Recommend Neuroanatomy is best learnt via: Mnemonics with
            stories, Image based Occlusion Flashcards
          </Text>
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
  greetingText: {
    marginTop: 63,
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Rubik_600SemiBold",
    lineHeight: 30,
  },
  welcomeText: {
    marginTop: -1,
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Rubik_400Regular",
    lineHeight: 21,
  },
  instructionTitleText: {
    marginTop: 48,
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "Rubik_400Regular",
    lineHeight: 21,
    opacity: 0.4,
  },
  instructionText: {
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Rubik_400Regular",
    lineHeight: 21,
    opacity: 0.7,
  },
  buttonContainer: {
    marginTop: 75,
    marginVertical: 42,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 48,
    width: 310,
    height: 48,
    justifyContent: "center",
    shadowColor: "#CDCDCD",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 0,
    elevation: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Rubik_500Medium",
    lineHeight: 14,
    color: "#414167",
    alignSelf: "center",
  },
  subContainer: {
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: "#F2F2F2",
    height: 23,
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    fontFamily: "Rubik_500Medium",
    fontSize: 14,
    color: "#4F4F4F",
    lineHeight: 21,
  },
  bottomText: {
    marginHorizontal: 48,
    marginTop: 64,
    fontFamily: "Rubik_500Medium",
    fontSize: 12,
    lineHeight: 18,
    color: "#FFFFFF",
  },
});
