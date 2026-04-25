import { View, Text } from "react-native";
import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerNavigation = () => {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />

      <Drawer.Screen name="Profile" options={{ title: "Profile" }} />
    </Drawer>
  );
};

export default DrawerNavigation;
