import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponetsScreen = () => {
  const name = "Mahendra AR";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>by - {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { fontSize: 45, textAlign: "center" },
  subHeaderStyle: { fontSize: 20, textAlign: "center" }
});

export default ComponetsScreen;
