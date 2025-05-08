import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

// Sample data for demonstration
const sampleConversations = [
  {
    id: "1",
    title: "JavaScript Async/Await",
    preview: "Can you explain how to use async/await in JavaScript?",
    timestamp: "Today, 10:02 AM",
  },
  {
    id: "2",
    title: "React Native Animation",
    preview: "How do I create smooth animations in React Native?",
    timestamp: "Yesterday, 3:45 PM",
  },
  {
    id: "3",
    title: "CSS Grid Layout",
    preview: "I need help with CSS grid for a responsive design.",
    timestamp: "May 5, 2:30 PM",
  },
];

const quickPrompts = [
  "Explain a concept",
  "Write code for me",
  "Debug my code",
  "Optimize my solution",
];

export default function Index() {
  const router = useRouter();

  const handleNewChat = () => {
    router.navigate('/chat');
  };

  const handleSelectConversation = (id: string) => {
    router.navigate('/chat');
  };

  const handleQuickPrompt = (prompt: string) => {
    router.navigate('/chat');
  };

  return (
    <SafeAreaView className="flex-1 bg-dark-bg">
      <View className="flex-1">
        <View className="p-6">
          <Text className="text-light-gray text-2xl font-bold mb-2">Welcome back</Text>
          <Text className="text-silver">What would you like to do today?</Text>
        </View>

        {/* Quick actions */}
        <View className="px-6 mb-6">
          <Text className="text-light-gray text-lg font-medium mb-3">Quick actions</Text>
          <View className="flex-row flex-wrap">
            <TouchableOpacity 
              onPress={handleNewChat}
              className="bg-medium-gray rounded-lg p-4 mr-3 mb-3 flex-row items-center">
              <Feather name="plus" size={18} color="#ECECF2" />
              <Text className="text-light-gray ml-2 font-medium">New Chat</Text>
            </TouchableOpacity>
            
            {quickPrompts.map((prompt, index) => (
              <TouchableOpacity 
                key={index}
                onPress={() => handleQuickPrompt(prompt)}
                className="bg-medium-gray rounded-lg p-4 mr-3 mb-3">
                <Text className="text-light-gray font-medium">{prompt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent conversations */}
        <View className="px-6 flex-1">
          <Text className="text-light-gray text-lg font-medium mb-3">Recent conversations</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {sampleConversations.map((conversation) => (
              <TouchableOpacity
                key={conversation.id}
                onPress={() => handleSelectConversation(conversation.id)}
                className="bg-medium-gray rounded-lg p-4 mb-3">
                <View className="flex-row justify-between items-start">
                  <View className="flex-row items-center flex-1">
                    <Ionicons name="chatbubble-outline" size={16} color="#3B82F6" />
                    <Text className="text-light-gray ml-2 font-medium flex-1" numberOfLines={1}>
                      {conversation.title}
                    </Text>
                  </View>
                  <Text className="text-silver text-xs">{conversation.timestamp}</Text>
                </View>
                <Text className="text-silver text-sm mt-1" numberOfLines={2}>
                  {conversation.preview}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
