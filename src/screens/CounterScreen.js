// import { useState } from "react";
import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  const { counter } = state,
    { type } = action;
  switch (type) {
    case "on_increment":
      return { counter: counter + 1 };
    case "on_decrement":
      return { counter: counter - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      {/* <Button title="Increment" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrement" onPress={() => setCounter(counter - 1)} /> */}
      <Button
        title="Increment"
        onPress={() => {
          dispatch({ type: "on_increment" });
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          dispatch({ type: "on_decrement" });
        }}
      />
      <Text style={styles.textStyle}>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { fontSize: 30, textAlign: "center" }
});

export default CounterScreen;
