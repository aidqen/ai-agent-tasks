import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

type Conversation = {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
};

type ChatSidebarProps = {
  conversations: Conversation[];
  activeConversationId: string | null;
  onSelectConversation: (id: string) => void;
  onNewChat: () => void;
};

export default function ChatSidebar({
  conversations,
  activeConversationId,
  onSelectConversation,
  onNewChat,
}: ChatSidebarProps) {
  return (
    <View className="flex-1 bg-dark-blue border-r border-steel">
      <View className="p-4 border-b border-steel">
        <Text className="text-light-gray text-xl font-bold">AI Assistant</Text>
      </View>

      <TouchableOpacity
        onPress={onNewChat}
        className="mx-4 my-3 bg-accent-blue rounded-lg p-3 flex-row items-center"
      >
        <Feather name="plus" size={18} color="#F1F5F9" />
        <Text className="text-light-gray ml-2 font-medium">New Chat</Text>
      </TouchableOpacity>

      <ScrollView className="flex-1">
        {conversations.map((conversation) => (
          <TouchableOpacity
            key={conversation.id}
            onPress={() => onSelectConversation(conversation.id)}
            className={`p-4 border-b border-steel ${
              activeConversationId === conversation.id ? 'bg-medium-blue' : ''
            }`}
          >
            <View className="flex-row items-center">
              <Ionicons name="chatbubble-outline" size={16} color="#2563EB" />
              <Text className="text-light-gray ml-2 font-medium" numberOfLines={1}>
                {conversation.title}
              </Text>
            </View>
            <Text className="text-silver text-xs mt-1" numberOfLines={2}>
              {conversation.preview}
            </Text>
            <Text className="text-silver text-xs mt-1 text-right">
              {conversation.timestamp}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="p-4 border-t border-steel">
        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="settings-outline" size={18} color="#6B7280" />
          <Text className="text-silver ml-2">Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
