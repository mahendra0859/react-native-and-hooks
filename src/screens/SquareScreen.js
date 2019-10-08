// import { useState } from "react";
import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// state = Component state object == {red:number, green:number, blue:number}
// action = howToChangeStateObject == {colorToChange:'red' || 'green' || 'blue', amount:15 || -15}
// Community connvention for reducer
// action = {type:'change_red' || 'change_green' || 'change_blue', payload:15 || -15}
const reducer = (state, action) => {
  const { red, green, blue } = state,
    { type, payload } = action;
  switch (type) {
    case "change_red":
      return red + payload > 255 || red + payload < 0
        ? state
        : { ...state, red: red + payload };
    case "change_green":
      return green + payload > 255 || green + payload < 0
        ? state
        : { ...state, green: green + payload };
    case "change_blue":
      return blue + payload > 255 || blue + payload < 0
        ? state
        : { ...state, blue: blue + payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // useState - hook useability
  //   const [red, setRed] = useState(0),
  //     [green, setGreen] = useState(0),
  //     [blue, setBlue] = useState(0);

  //   const setColor = (color, change) => {
  //     switch (color) {
  //       case "red":
  //         red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //         return;
  //       case "green":
  //         green + change > 255 || green + change < 0
  //           ? null
  //           : setGreen(green + change);
  //         return;
  //       case "blue":
  //         blue + change > 255 || blue + change < 0
  //           ? null
  //           : setBlue(blue + change);
  //         return;
  //       default:
  //         return;
  //     }
  //   };

  //   useReducer -- Hook useability
  // dispatch = runMyReducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <Text style={styles.textStyle}>Custom color</Text>
      {/* <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          marginLeft: 80,
          marginTop: 40
        }}
      ></View> */}
      <ColorCounter
        color="red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({
            type: "change_red",
            payload: -1 * COLOR_INCREMENT
          })
        }
      />
      <ColorCounter
        color="green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({
            type: "change_green",
            payload: -1 * COLOR_INCREMENT
          })
        }
      />
      <ColorCounter
        color="blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({
            type: "change_blue",
            payload: -1 * COLOR_INCREMENT
          })
        }
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          marginLeft: 80,
          marginTop: 40,
          borderColor: "black",
          borderWidth: 1,
          borderStyle: "solid"
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    color: "#20d",
    textTransform: "uppercase"
  }
});

export default SquareScreen;
