import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increment" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrement" onPress={() => setCounter(counter - 1)} />
      <Text style={styles.textStyle}>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { fontSize: 30, textAlign: "center" }
});

export default CounterScreen;
