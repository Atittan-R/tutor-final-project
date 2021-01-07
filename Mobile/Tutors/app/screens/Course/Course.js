import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ScrollView, View } from "react-native";
import { Icon } from "react-native-elements";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import ProductCard from "../../components/cards/ProductCard/ProductCard";
import { Footer } from "../../components/forms/Footer.js/Footer";
import { colors } from "../../config/colors";

import { styles } from "./styles";
//
const Course = ({ navigation }) => {
  const [checked, setChecked] = useState(true);
  const [itemId, setItemId] = useState(-1);
  const [
    names = [
      { id: 0, name: "Database", select: checked },
      { id: 1, name: "Compro1", select: checked },
      { id: 2, name: "Compro2", select: checked },
      { id: 3, name: "Java", select: checked },
      { id: 4, name: "Oop", select: checked },
      { id: 5, name: "HCI", select: checked },
      { id: 6, name: "UX", select: checked },
      { id: 7, name: "Data com", select: checked },
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
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Course")}>
          <Icon name={"home"} type={"feather"} color={colors.secondary} />
          <Text style={styles.menuText}> Home </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Require")}>
          <Icon name={"layers"} type={"feather"} color={colors.secondary} />
          <Text style={styles.menuText}> Feed </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon
            name={"message-circle"}
            type={"feather"}
            color={colors.secondary}
          />
          <Text style={styles.menuText}> Chat </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Notification")}
        >
          <Icon name={"bell"} type={"feather"} color={colors.secondary} />
          <Text style={styles.menuText}> Notify </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("MyProfile")}
        >
          <Icon name={"user"} type={"feather"} color={colors.secondary} />
          <Text style={styles.menuText}> Me </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Course;
