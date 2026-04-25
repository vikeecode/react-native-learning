import { View, Text } from "react-native";
import React from "react";
import _layout from "../_layout";

import { Tabs } from "expo-router";

const TabsRoute = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "home" }} />
      <Tabs.Screen name="about" options={{ title: "about" }} />
    </Tabs>
  );
};

export default TabsRoute;
