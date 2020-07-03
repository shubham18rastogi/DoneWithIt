import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";

export default function App() {
  console.log("App Executed");
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => console.log("Image Clicked!!")}>
        <Image
          fadeDuration={1000}
          source={{
            uri: "https://picsum.photos/seed/picsum/200/300",
            width: 300,
            height: 200,
          }}
        />
      </TouchableWithoutFeedback>
      <Text numberOfLines={1} onPress={() => console.log("Text clicked!!")}>
        Hello World !!!
      </Text>
      <Image source={require("./assets/icon.png")} />
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
