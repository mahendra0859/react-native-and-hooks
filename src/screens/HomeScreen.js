import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>Welcome to React Native Home Page</Text>
      <Text style={styles.subText}>
        Click the following buttons to navigate to particular screens...
      </Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      />
      <Button title="Go to List Demo" onPress={() => navigate("List")} />
      <Button title="Go to Image Screen" onPress={() => navigate("Images")} />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigate("Counter")}
      />
      <Button title="Go to Color Screen" onPress={() => navigate("Color")} />

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
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 4
  },
  subText: {
    marginBottom: 4,
    textAlign: "center"
  }
});

export default HomeScreen;
