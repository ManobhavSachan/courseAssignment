import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { BackSVG, MenuSVG, StarSVG, PaperSVG, MenuBigSVG, ArrowRightSVG, BookMarkSVG } from "../utils/Svg";
import {
  useFonts,
  Rubik_500Medium,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import * as Progress from "react-native-progress";

const BottomBar = () => {
  const [fontsLoaded] = useFonts({
    Rubik_500Medium,
    Rubik_600SemiBold,
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Pressable
            style={styles.backButton}
            onPress={() => alert("Back button pressed")}
          >
            <MenuBigSVG />
          </Pressable>
          <View style={styles.solveContainer}>
            <ArrowRightSVG />
            <Text style={styles.titleText}>Skip</Text>
          </View>
          <Pressable
            style={styles.backButton}
            onPress={() => alert("Menu button pressed")}
          >
            <BookMarkSVG />
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    backgroundColor: "FFFFFF",
    height: 68,
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: "row",
    // marginTop: 23,
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 1,
  },
  subTopContainer: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 40,
  },
  solveContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  backButton: {},
  titleText: {
    fontFamily: "Rubik_400Regular",
    color: "#4F4F4F",
    fontSize: 14,
    lineHeight: 24,
  },
  companyText: {
    fontFamily: "Rubik_600SemiBold",
    marginTop: 36,
    color: "#FFFFFF",
    opacity: 0.5,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 21,
    letterSpacing: 0.2,
  },
  hospitalSVG: {
    marginTop: 5,
    fontSize: 80,
    fontFamily: "Rubik_500Medium",
  },
  subContainer: {
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: "#F2F2F2",
    height: 20,
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    fontFamily: "Rubik_400Regular",
    fontSize: 12,
    color: "#4F4F4F",
    lineHeight: 18,
  },
});

export default BottomBar;
