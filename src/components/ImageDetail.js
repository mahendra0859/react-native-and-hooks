import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource, imageScrore }) => {
  return (
    <View style={styles.viewStyle}>
      <Image source={imageSource} style={styles.imageStyle} />
      <Text style={styles.text}>Image Type: {title}, </Text>
      <Text style={styles.text}>Image Score: {imageScrore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: "bold", fontSize: 12 },
  imageStyle: {
    height: 80,
    width: "30%",
    marginRight: 10
  },
  viewStyle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1
  }
});

export default ImageDetail;
