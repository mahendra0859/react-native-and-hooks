import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  // console.log("Props", props);
  const team = [
    // { key: "1", name: "Mahendra" },
    // { key: "2", name: "Pramod" },
    // { key: "3", name: "Asish" },
    // { key: "4", name: "Harish" },
    // { key: "5", name: "Sumanth" },
    // { key: "6", name: "Neeraj" }
    { name: "Mahendra", age: 25 },
    { name: "Pramod", age: 25 },
    { name: "Asish", age: 24 },
    { name: "Harish", age: 35 },
    { name: "Sumanth", age: 35 },
    { name: "Neeraj", age: 35 }
  ];
  return (
    <View>
      <Text style={styles.headerStyle}>React Native Team Members List</Text>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={team => team.name}
        data={team}
        renderItem={({ item, index }) => {
          // element === {item:{name:"mahendra"}, index:0}
          // item === {name:"Mahendra"}
          return (
            <View style={styles.listStyle}>
              <Text style={styles.textStyle}>
                {index + 1}) Name:{item.name}, Age: {item.age}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: { fontSize: 40, margin: 10 },
  textStyle: { marginVertical: 20, marginHorizontal: 20 },
  listStyle: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 10
  }
});

export default ListScreen;
