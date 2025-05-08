import { useChat } from '@ai-sdk/react';
import * as NavigationBar from 'expo-navigation-bar';
import { useRouter } from 'expo-router';
import { fetch as expoFetch } from 'expo/fetch';
import React, { useEffect } from 'react';
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
  const {
    input,
    messages,
    error,
    handleInputChange,
    handleSubmit
  } = useChat({
    fetch: expoFetch as unknown as typeof globalThis.fetch,
    api: '/api/chat',
    // body: {
      
    // },
    onError: error => console.error(error.message, 'ERROR'),
  });

  const router = useRouter();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#121212')// Set background color
    NavigationBar.setStyle('dark')// Set background color
  }, [])



  const handleSendMessage = (message: string) => {
    // Create a synthetic form submit event
    const event = {
      preventDefault: () => { }
    } as React.FormEvent<HTMLFormElement>;

    // Set the input value and then submit the form
    // handleInputChange({ target: { value: message } } as React.ChangeEvent<HTMLInputElement>);
    handleSubmit(event);
  };

  return (
    <>

      <SafeAreaView className="flex-1 bg-dark-bg">
        {/* <StatusBar barStyle="light-content" backgroundColor="#050A10" /> */}
        <View className="flex-1">
          <ChatHistory messages={messages} error={error} />
          <ChatInput onSend={handleSendMessage} input={input} handleInputChange={handleInputChange} />
        </View>
      </SafeAreaView>
    </>
  );
}
