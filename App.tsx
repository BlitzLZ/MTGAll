import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MTGApp</Text>
      <TouchableOpacity style={styles.neuButton}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    color: "#333",
    marginBottom: 20,
    fontWeight: "bold",
  },
  neuButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 50,
    boxShadow: "inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff",
    color: "#4d4d4d",
    cursor: "pointer",
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderColor: "rgb(206, 206, 206)",
    borderWidth: 2,
  },
  buttonText: {
    color: "#4d4d4d",
    fontSize: 18,
    fontWeight: "500",
  },
  neuButtonHover: {
    boxShadow: "inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff",
  },
  neuButtonFocus: {
    boxShadow: "inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff",
  },
});
