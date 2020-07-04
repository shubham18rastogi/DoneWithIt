import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { View } from "react-native";

import Card from "./app/components/Card";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  console.log("App Executed");
  return (
    <Screen>
      <ListItem
        title="Title"
        subTitle="subTitle"
        ImageComponent={<Icon name="email" />}
      ></ListItem>
    </Screen>
  );
}
