import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import "../global.css";
import { StatusBar } from "expo-status-bar";



const App = () => {
  return (  
    <View className="flex-1 justify-center items-center bg-blue-400">
      <Text className="text-3xl font-bold">RootLayout</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color: 'blue'}}>Go to Profile Page</Link>
    </View> 
  );
};

export default App;