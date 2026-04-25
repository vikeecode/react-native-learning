import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const contact = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Text>contact</Text>
    </SafeAreaProvider>
  );
};

export default contact;
