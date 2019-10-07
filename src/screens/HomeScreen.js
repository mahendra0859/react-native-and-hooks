import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>Hi there!!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      />
      <Button title="Go to List Demo" onPress={() => navigate("List")} />
      {/* <TouchableOpacity onPress={() => navigate("List")}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 10
  }
});

export default HomeScreen;
