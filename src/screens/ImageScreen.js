import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>List of Images</Text>
      <ImageDetail
        title="Nature"
        imageSource={require("../../assets/nature.jpg")}
        imageScrore="5"
      />
      <ImageDetail
        title="Food"
        imageSource={require("../../assets/food.jpg")}
        imageScrore="6"
      />
      <ImageDetail
        title="Sports"
        imageSource={require("../../assets/sports.jpg")}
        imageScrore="9"
      />
      <ImageDetail
        title="Fashion"
        imageSource={require("../../assets/fashion.jpeg")}
        imageScrore="7"
      />
      <ImageDetail
        title="Night Life"
        imageSource={require("../../assets/nightLife.jpg")}
        imageScrore="8"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { fontSize: 30, textAlign: "center" }
});

export default ImageScreen;
