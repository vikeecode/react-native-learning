import { View, Text } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { router } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => router.push("/contact")}>ContactUs</Button>
    </View>
  );
};

export default Home;
