import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import UpperHome from "../../components/UpperHome";
import { PaperSVG, DarkArrowRight } from "../../utils/Svg";
import {
  useFonts,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_400Regular,
} from "@expo-google-fonts/rubik";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Link } from "expo-router";
import AskDoubt from "../../components/AskDoubt";
import { useState } from "react";
import UpperBar from "../../components/UpperBar";
import BottomBar from "../../components/BottomBar";
import Statement from "../../components/Statement";
import Question from "../../components/Question";
import AskInfo from "../../components/AskInfo";
import CorrectAns from "../../components/CorrectAns";
import PartiallyCorrectAns from "../../components/PartiallyCorrect";
import IncorrectAns from "../../components/IncorrectAns";

const ws = new WebSocket("ws://localhost:8080");
export default function Patient() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
  });
  const [text, setText] = useState("");
  const handleTextChange = (newText) => {
    // console.log(newText);
    setText(newText);
    sendMessage(ws, JSON.stringify({ type: "partiallyCorrect" }));
  };
  let flag = true;
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState({});
  const [receivedAns, setReceivedAns] = useState({});

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connected to WebSocket server");

      sendMessage(ws, JSON.stringify({ type: "initial" }));
    };

    ws.onmessage = (event) => {
      console.log("Received:", event.data);
      if (flag) setReceivedMessage(JSON.parse(event.data));
      else setReceivedAns(JSON.parse(event.data));
      flag = false;
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (ws, message) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(message);
    } else {
      console.error("WebSocket connection not open");
    }
  };
  const [selected, setSelected] = useState("");
  const { patient } = useLocalSearchParams();
  return (
    <>
      <StatusBar hidden />
      <UpperBar no={patient} />
      {fontsLoaded && (
        <ScrollView style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.subText}>View Case Details</Text>
          </View>
          <Statement
            no={patient}
            name={receivedMessage?.text?.name || ""}
            text={receivedMessage?.text?.statement || ""}
          />
          <Question
            no={patient}
            text={receivedMessage?.text?.problem || ""}
            options={receivedMessage?.text?.options || []}
            correct={receivedMessage?.text?.correctAnswer || ""}
            onOptionSelect={(selectedOption) => {
              console.log(selectedOption);
              setSelected(selectedOption);
              console.log(receivedMessage.text.correctAnswer, selected);
              if (receivedMessage.text.correctAnswer === selected)
                sendMessage(ws, JSON.stringify({ type: "correct" }));
              else sendMessage(ws, JSON.stringify({ type: "inCorrect" }));
            }}
          />
          <AskInfo onTextChange={handleTextChange} />
          {text == "" &&
            selected != "" &&
            receivedMessage.text.correctAnswer === selected && (
              <CorrectAns no={patient} text={receivedAns?.text?.text || ""} />
            )}
          {text == "" &&
            selected != "" &&
            receivedMessage.text.correctAnswer != selected && (
              <IncorrectAns no={patient} text={receivedAns?.text?.text || ""} />
            )}
          {text != "" && (
            <PartiallyCorrectAns
              no={patient}
              correctText={receivedAns?.text?.textCorrect || ""}
              inCorrectText={receivedAns?.text?.textIncorrect || ""}
            />
          )}
        </ScrollView>
      )}
      <BottomBar no={patient} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // alignItems: "center",
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    marginTop: -9,
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
    alignItems: "center",
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
    alignSelf: "center",
  },
  subContainer: {
    // flexDirection: "row",
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
