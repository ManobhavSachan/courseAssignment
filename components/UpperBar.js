import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { BackSVG, MenuSVG, StarSVG, PaperSVG } from "../utils/Svg";
import {
  useFonts,
  Rubik_500Medium,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import * as Progress from "react-native-progress";
import { parse } from "react-native-svg";
import { Link } from "expo-router";

const UpperBar = (props) => {
  const no = props.no;
  const [fontsLoaded] = useFonts({
    Rubik_500Medium,
    Rubik_600SemiBold,
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Link href="/start">
            <Pressable style={styles.backButton}>
              <BackSVG />
            </Pressable>
          </Link>
          <View>
            <Progress.Bar
              progress={parseInt(no) / 20}
              height={7}
              width={248}
              borderColor="#CFDEE8"
              borderWidth={1}
              color="#8C8CBB"
              borderRadius={4}
              unfilledColor="#CFDEE8"
            />
          </View>
          <Pressable
            style={styles.backButton}
            onPress={() => alert("Menu button pressed")}
          >
            <MenuSVG />
          </Pressable>
        </View>
        {fontsLoaded && (
          <View style={styles.subTopContainer}>
            <View style={styles.solveContainer}>
              <StarSVG />
              <Text style={styles.titleText}>SOLVE ALONG</Text>
            </View>
            <View style={styles.subContainer}>
              <PaperSVG />
              <Text style={styles.subText}> NEET-PG 2014 Paper</Text>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#414167",
  },
  topContainer: {
    flexDirection: "row",
    marginTop: 23,
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
    color: "#FFFFFF",
    fontSize: 16,
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

export default UpperBar;
