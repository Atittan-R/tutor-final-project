import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import ProductCard from "../../components/cards/ProductCard/ProductCard";

import { styles } from "./styles";
//
const Course = ({ navigation }) => {
  const [checked, setChecked] = useState(true);
  const [itemId, setItemId] = useState(-1);
  const [
    names = [
      { id: 0, name: "Database", select: checked ,price:650,shopname:"You1"},
      { id: 1, name: "Compro1", select: checked ,price:500,shopname:"You2"},
      { id: 2, name: "Compro2", select: checked ,price:450,shopname:"You3"},
      { id: 3, name: "Java", select: checked ,price:300,shopname:"You4"},
      { id: 4, name: "Oop", select: checked ,price:350,shopname:"You5"},
      { id: 5, name: "HCI", select: checked ,price:600,shopname:"You6"},
      { id: 6, name: "UX", select: checked ,price:650,shopname:"You7"},
      { id: 7, name: "Data com", select: checked ,price:400,shopname:"You8"},
    ],
    setName,
  ] = useState();

  useEffect(() => {
    console.log(`\nChecked Values: ${checked}\nID: ${itemId}`);
    // setChecked(checked);
    ObjectSelection(itemId);
    return () => {
      navigation.navigate("Maps");
    };
  }, [itemId]);

  //onPress Do this Function
  const ObjectSelection = (itemId) => {
    //set false to all object
    names.map((major) => (major.select = false));
    //update object when state has change
    const newNames = names.map((newMajor) => {
      if (newMajor.id !== itemId) {
        return newMajor;
      } else {
        setChecked(true);
        console.log(`Major selected: ${JSON.stringify(newMajor)}`);
        return { ...newMajor, select: checked };
      }
    });
    //Default Object
    // console.log("Default Array" + JSON.stringify(names.map((Major) => Major)));
    setName(newNames);
    console.log(
      "Major Selection Change: " +
        JSON.stringify(newNames.find((n) => n.id === itemId))
    );
    console.log("New Array" + JSON.stringify(newNames));
    return newNames;
  };

  const majors = names.map((items) => (
    <ProductCard
      key={items.id}
      index={items.id}
      majorName={items.name}
      selected={items.select}
      onPress={() => {
        setChecked(checked);
        setItemId(items.id);
      }}
    />
  ));
  return (
    <>
      <ScrollView style={styles.bg}>
        <View style={styles.container}>{majors}</View>
      </ScrollView>
    </>
  );
};

export default Course;
