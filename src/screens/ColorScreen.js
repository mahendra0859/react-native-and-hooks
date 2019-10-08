import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Text style={styles.textStyle}>Random Colors Generating Screen</Text>
      <Button
        title="Add a color"
        onPress={() => setColor([...colors, randomRgb()])}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => (
          <View
            style={{ height: 100, width: 100, backgroundColor: item }}
          ></View>
        )}
      />
    </View>
  );
};

const randomRgb = () =>
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center"
  }
});

export default ColorScreen;
