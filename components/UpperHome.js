import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { BackSVG } from "../utils/Svg";
import {
  useFonts,
  Rubik_500Medium,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import { Link, router } from "expo-router";

const UpperHome = () => {
  const [fontsLoaded] = useFonts({
    Rubik_500Medium,
    Rubik_600SemiBold,
  });
  return (
    <>
      <Link href="/">
        <Pressable style={styles.backButton}>
          <BackSVG />
        </Pressable>
      </Link>
      {fontsLoaded && (
        <View style={styles.container}>
          <Text style={styles.titleText}>🦴 OSTEOLOGY</Text>
          <Text style={styles.companyText}>ONCOURSE</Text>
          <Text style={styles.hospitalSVG}>🏥</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#414167",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 69,
    left: 41,
    zIndex: 1,
  },
  titleText: {
    width: 118.41,
    height: 29.2,
    backgroundColor: "#FFFFFF",
    borderRadius: 7.2,
    borderWidth: 1,
    borderColor: "#9FA2A9",
    paddingVertical: 6,
    paddingHorizontal: 3.6,
    marginTop: 71,
    alignContent: "center",
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
    fontSize: 14.41,
    letterSpacing: 0.14,
    color: "#63666D",
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
});

export default UpperHome;
