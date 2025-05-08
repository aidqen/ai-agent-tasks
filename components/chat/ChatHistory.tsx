import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import ChatMessage from './ChatMessage';

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
};

type ChatHistoryProps = {
  messages: Message[];
};

export default function ChatHistory({ messages }: ChatHistoryProps) {
  return (
    <ScrollView 
      className="flex-1 bg-dark-bg"
      contentContainerStyle={{ paddingVertical: 20 }}
      showsVerticalScrollIndicator={false}
    >
      {messages.length === 0 ? (
        <View className="flex-1 items-center justify-center py-10">
          <View className="bg-medium-purple rounded-full p-4 mb-4">
            <Ionicons name="chatbubble-ellipses-outline" size={32} color="#7A5FA8" />
          </View>
          <Text className="text-light-gray text-center text-lg font-medium">
            Start a conversation
          </Text>
          <Text className="text-navy text-center mt-2 px-10">
            Ask me anything and I'll do my best to help you
          </Text>
        </View>
      ) : (
        messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))
      )}
    </ScrollView>
  );
}
