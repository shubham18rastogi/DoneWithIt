import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the Library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <LoginScreen />;
}
