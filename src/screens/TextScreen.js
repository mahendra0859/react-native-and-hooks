import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.textStyle}>Text Screen</Text>
      <Text> Enter Password: </Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        type
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 4 && password.length > 0 && (
        <Text> Password should contain atleast 5 characters </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { fontSize: 30, textAlign: "center" },
  inputStyle: { margin: 15, borderColor: "black", borderWidth: 1 }
});

export default TextScreen;
