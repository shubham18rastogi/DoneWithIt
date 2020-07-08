import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import LoginScreen from "./app/screens/LoginScreen";
import Screen from "./app/components/Screen";
import { Button, Image } from "react-native";

export default function App() {
  const [imageUri, setImageUri] = useState("");
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the Library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image
        source={{ uri: imageUri }}
        style={{ margin: 10, width: 400, height: 400 }}
      />
    </Screen>
  );
}
