import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f5f5",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: " #99A3A4",
  headerFontColor: "#ffffff",
  headerFontSize: "15px",
  botBubbleColor: "#99A3A4",
  botFontColor: "#ffffff",
  userBubbleColor: "#99A3A4",
  userFontColor: "#ffffff",
};

function TeslaChatbot() {
  const steps = [
    {
      id: "1",
      message: "Welcome to Tesla Chat! How can I assist you today?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: ({ previousValue }) =>
        `Hi, I see you want to know about ${previousValue}. I can help you with information about Tesla vehicles, features, charging, and more.`,
      trigger: "4",
    },
    {
      id: "4",
      message: "What would you like to know more about?",
      trigger: "5",
    },
    {
      id: "5",
      options: [
        { value: "vehicles", label: "Tesla Vehicles", trigger: "6" },
        { value: "features", label: "Features", trigger: "7" },
        { value: "charging", label: "Charging", trigger: "8" },
      ],
    },
    {
      id: "6",
      message:
        "Tesla offers several models including the Model S, Model 3, Model X, and Model Y. Each has unique features and capabilities.",
      end: true,
    },
    {
      id: "7",
      message:
        "Tesla vehicles come with a variety of features such as Autopilot, Full Self-Driving, premium interior options, and over-the-air updates.",
      end: true,
    },
    {
      id: "8",
      message:
        "Tesla has an extensive Supercharger network for long-distance travel and home charging solutions with the Tesla Wall Connector.",
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} />
    </ThemeProvider>
  );
}

export default TeslaChatbot;
