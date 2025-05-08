import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import ChatHistory from '../components/chat/ChatHistory';
import ChatInput from '../components/chat/ChatInput';

// Sample data for demonstration
const initialMessages = [
  {
    id: '1',
    content: 'Hello! How can I assist you today?',
    isUser: false,
    timestamp: '10:00 AM',
  },
  {
    id: '2',
    content: 'I need help with a coding problem. Can you explain how to use async/await in JavaScript?',
    isUser: true,
    timestamp: '10:01 AM',
  },
  {
    id: '3',
    content: 'Async/await is a way to handle asynchronous operations in JavaScript. It makes asynchronous code look and behave more like synchronous code, which can be easier to understand and maintain.',
    isUser: false,
    timestamp: '10:02 AM',
  },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const router = useRouter();

  const handleSendMessage = (content: string) => {
    // Add user message
    const newUserMessage = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    
    // In a real app, you would send the message to an AI service here
    // and handle the response
  };

  return (
    <SafeAreaView className="flex-1 bg-dark-bg">
      {/* <StatusBar barStyle="light-content" backgroundColor="#050A10" /> */}
      <View className="flex-1">
        <ChatHistory messages={messages} />
        <ChatInput onSend={handleSendMessage} />
      </View>
    </SafeAreaView>
  );
}
