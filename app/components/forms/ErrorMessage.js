import React from "react";
import { StyleSheet } from "react-native";

import Text from "../Text";

function ErrorMessage({ error, visible }) {
  return !error || !visible ? null : (
    <Text style={styles.error}>{error}</Text>
  );
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default ErrorMessage;
