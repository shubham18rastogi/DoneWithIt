import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  console.log("App Executed");
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="black"
        title="Click Me!!"
        onPress={() => console.log("Button Clicked!!")}
      />
      <Button title="Alert..." onPress={() => alert("Button Clicked!!")} />
      <Button
        title="Custom Alert"
        onPress={() =>
          Alert.alert("Title", "Message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
      <Button
        title="Prompt"
        onPress={
          () => Alert.prompt("Title", "Message", (text) => console.log(text)) //only works on ios
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
