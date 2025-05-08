import React from 'react';
import { View, Text } from 'react-native';

type MessagePreviewProps = {
  message: string;
  isUser: boolean;
  timestamp: string;
};

export default function MessagePreview({ message, isUser, timestamp }: MessagePreviewProps) {
  return (
    <View 
      className={`flex flex-row mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <View 
        className={`rounded-2xl px-4 py-3 max-w-[80%] ${
          isUser 
            ? 'bg-indigo-purple rounded-tr-none' 
            : 'bg-medium-purple rounded-tl-none'
        }`}
      >
        <Text 
          className={`text-base ${isUser ? 'text-light-gray' : 'text-light-gray'}`}
        >
          {message}
        </Text>
        <Text className="text-xs text-navy mt-1 text-right">
          {timestamp}
        </Text>
      </View>
    </View>
  );
}
