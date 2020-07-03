import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  console.log("App Executed");
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Alert..." onPress={() => alert("Button Clicked!!")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
