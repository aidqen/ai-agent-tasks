import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

type ChatMessageProps = {
  content: string;
  isUser: boolean;
  timestamp: string;
};

export default function ChatMessage({ content, isUser, timestamp }: ChatMessageProps) {
  return (
    <View className={`flex flex-row mb-4 px-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <View className="h-8 w-8 bg-dark-gray rounded-full mr-2 items-center justify-center">
          <Ionicons name="logo-electron" size={18} color="#F1F5F9" />
        </View>
      )}
      
      <View 
        className={`rounded-2xl px-4 py-3 max-w-[75%] ${
          isUser 
            ? 'bg-dark-blue rounded-tr-none' 
            : 'bg-dark-gray rounded-tl-none'
        }`}
      >
        <Text className="text-light-gray text-base">
          {content}
        </Text>
        <Text className="text-xs text-silver mt-1 text-right">
          {timestamp}
        </Text>
      </View>
      
      {/* {isUser && (
        <View className="h-8 w-8 bg-violet rounded-full ml-2 items-center justify-center">
          <Ionicons name="person" size={18} color="#ECECF2" />
        </View>
      )} */}
    </View>
  );
}
