import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import './global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#F1F5F9',
          drawerStyle: {
            backgroundColor: '#050A10',
            width: 280,
          },
          drawerActiveTintColor: '#2563EB',
          drawerInactiveTintColor: '#F1F5F9',
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "AI Assistant",
          }}
        />
        <Drawer.Screen
          name="chat"
          options={{
            drawerLabel: "Chat",
            title: "Chat",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
