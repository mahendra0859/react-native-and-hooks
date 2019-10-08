import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={{ ...styles.textStyle, flex: 1 }}>Box Screen #1</Text>
        <Text style={{ ...styles.textStyle, alignSelf: "flex-start" }}>
          Box Screen #2
        </Text>
        <Text style={{ ...styles.textStyle, position: "absolute", bottom: 0 }}>
          Box Screen #3
        </Text>
      </View>
      <View
        style={{
          ...styles.viewStyle,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        <View style={{ ...styles.subViewStyle, backgroundColor: "red" }}></View>
        <View
          style={{
            ...styles.subViewStyle,
            backgroundColor: "green",
            top: 60
          }}
        ></View>
        <View
          style={{ ...styles.subViewStyle, backgroundColor: "blue" }}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 4,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    borderWidth: 2,
    borderColor: "red",
    margin: 10
  },
  subViewStyle: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "purple",
    marginHorizontal: 10
  }
});

export default BoxScreen;
