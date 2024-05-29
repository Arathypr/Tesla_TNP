import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#ffffff",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "	#99A3A4", 
  headerFontColor: "#ffffff", 
  headerFontSize: "15px",
  botBubbleColor: "#99A3A4", 
  botFontColor: "#ffffff",
  userBubbleColor: "#99A3A4",
  userFontColor: "#ffffff", 
};

function Chat() {
  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "4",
    },
    {
      id: "4",
      message: "What number am I thinking?",
      trigger: "5",
    },
    {
      id: "5",
      options: [
        { value: 1, label: "Number 1", trigger: "7" },
        { value: 2, label: "Number 2", trigger: "6" },
        { value: 3, label: "Number 3", trigger: "6" },
      ],
    },
    {
      id: "6",
      message: "Wrong answer, try again.",
      trigger: "5",
    },
    {
      id: "7",
      message: "Awesome! You are a telepath!",
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} />
    </ThemeProvider>
  );
}

export default Chat;
