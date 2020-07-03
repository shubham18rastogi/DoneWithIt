import React from "react";
import { View } from "react-native";

export default function App() {
  console.log("App Executed");
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          //alignSelf: "flex-start",
          //flex: 3,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: "absolute",
          //flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          //alignSelf: "flex-end",
          //flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
          //flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
          //flex: 2,
        }}
      />
    </View>
  );
}
