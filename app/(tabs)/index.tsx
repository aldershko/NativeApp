import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Redirect href={"login"} />
    </View>
  );
};

export default Home;
