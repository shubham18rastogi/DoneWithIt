import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { View } from "react-native";

import AppText from "./app/components/AppText";

export default function App() {
  console.log("App Executed");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>I Love React Native</AppText>
    </View>
  );
}
