import { Feather, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Platform, TextInput, TouchableOpacity, View } from 'react-native';

type ChatInputProps = {
  onSend: (message: string) => void;
};

export default function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <View className="px-4 py-3 bg-medium-gray rounded-t-xl h-[6.5rem]">
      <View className="flex-row items-center">
        {/* <TouchableOpacity className="p-2 mr-2">
          <MaterialIcons name="image" size={24} color="#F1F5F9" />
        </TouchableOpacity> */}

        {/* <View className="flex-1 flex-row items-center bg-slate-blue rounded-full px-4 py-2"> */}
          <TextInput
            className="flex-1 text-light-gray bg-transparent"
            placeholder="Ask anything"
            placeholderTextColor="#6B7280"
            value={input}
            onChangeText={setInput}
            multiline={Platform.OS === 'ios'}
            style={{ maxHeight: 100 }}
            maxLength={500}
          />

        {/* </View> */}


        <TouchableOpacity
          onPress={handleSend}
          className="p-2 ml-2 bg-light-blue rounded-full items-center justify-center"
          style={{ width: 40, height: 40 }}
        >
          {input.trim()
            ? <Feather name="send" size={20} color="#F1F5F9" />
            : <MaterialIcons name="mic" size={24} color="#F1F5F9" />
          }

        </TouchableOpacity>

      </View>
    </View>
  );
}
