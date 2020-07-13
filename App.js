import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Text, Button } from "react-native";
import Screen from "./app/components/Screen";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Details"
      onPress={() => navigation.navigate("TweetDetail", { id: 1 })}
    />
  </Screen>
);

const TweetDetail = ({ route }) => (
  <Screen>
    <Text>Tweet Detail {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetail"
      component={TweetDetail}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
