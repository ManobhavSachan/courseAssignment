const WebSocket = require("ws");

// Define responses for different types of messages
const responses = {
  initial: {
    name: "Mrs. Amrita",
    statement:
      "I am an 80-year-old woman with no major medical problems. Never been physically active for most of her life. Yesterday, I fell out of bed and immediately had a sharp pain in her left hip. I am since then not able to ambulate without severe pain.",
    problem:
      "Radiographs show not only a fracture of the left femoral head, but also a compressed fracture of T10. Which of the following conditions is she most likely to have?",
    options: [
      "Osteoporosis",
      "Rheumatoid arthritis",
      "Osteoarthritis",
      "Paget's disease of bone",
    ],
    correctAnswer: "Osteoporosis",
  },
  correct: {
    text: "Osteoporosis is a common condition in elderly patients, especially those who have been physically inactive. It leads to weakened bones that are more susceptible to fractures from minimal trauma, such as a fall from bed. The fractures described, including the femoral head fracture and the compression fracture of the T10 vertebra, are characteristic of osteoporosis.",
  },
  partiallyCorrect: {
    textCorrect:
      "Osteoporosis is a common condition in elderly patients, especially those who have been physically inactive. It leads to weakened bones that are more susceptible to fractures from minimal trauma, such as a fall from bed.",
    textIncorrect:
      "The fractures described, including the femoral head fracture and the compression fracture of the T10 vertebra, are characteristic of osteoporosis.",
  },
  inCorrect: {
    text: "In a usual condition you would have been right. Rheumatoid arthritis typically affects joints rather than causing spontaneous fractures. The radiographs suggest a loss of bone density, pointing to osteoporosis, not arthritis. For a clearer understanding, I'd suggest watching a video on osteoporosis to see why it fits this scenario.",
  },
  unrecognized: "I'm sorry, I didn't understand that.",
};

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.on("message", function incoming(message) {
    console.log("Received: %s", message);

    // Parse the incoming message
    const parsedMessage = JSON.parse(message);

    // Determine the type of message
    switch (parsedMessage.type) {
      case "initial":
        ws.send(JSON.stringify({ type: "response", text: responses.initial }));
        break;
      case "correct":
        ws.send(JSON.stringify({ type: "response", text: responses.correct }));
        break;
      case "partiallyCorrect":
        ws.send(
          JSON.stringify({ type: "response", text: responses.partiallyCorrect })
        );
        break;
      case "inCorrect":
        ws.send(
          JSON.stringify({ type: "response", text: responses.inCorrect })
        );
        break;
      default:
        ws.send(
          JSON.stringify({ type: "response", text: responses.unrecognized })
        );
    }
  });

  ws.on("close", function close() {
    console.log("Client disconnected");
  });
});
