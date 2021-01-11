import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useGlobalVar } from "../../context/GlobalContex";
import Colors from "../../configs/Colors";
import ProductCard from "../../components/cards/ProductCard/ProductCard";
import { Icon } from "react-native-elements";

export default function Home({ navigation }) {
  const { auth } = useGlobalVar();
  const [checked, setChecked] = useState(true);
  const [itemId, setItemId] = useState(-1);
  const [
    names = [
      {
        id: 0,
        name: "Database",
        select: checked,
        price: 650,
        shopname: "You1",
      },
      { id: 1, name: "Compro1", select: checked, price: 500, shopname: "You2" },
      { id: 2, name: "Compro2", select: checked, price: 450, shopname: "You3" },
      { id: 3, name: "Java", select: checked, price: 300, shopname: "You4" },
      { id: 4, name: "Oop", select: checked, price: 350, shopname: "You5" },
      { id: 5, name: "HCI", select: checked, price: 600, shopname: "You6" },
      { id: 6, name: "UX", select: checked, price: 650, shopname: "You7" },
      {
        id: 7,
        name: "Data com",
        select: checked,
        price: 400,
        shopname: "You8",
      },
    ],
    setName,
  ] = useState();

  useEffect(() => {
    console.log(`\nChecked Values: ${checked}\nID: ${itemId}`);
    // setChecked(checked);
    ObjectSelection(itemId);
    return () => {
      navigation.navigate("CourseDetail");
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
      <SafeAreaView style={styles.container} />
      <View style={styles.viewItem}>
        <Text style={styles.titleHome}>Tutor More</Text>
        <TouchableOpacity
          style={styles.search}
          onPress={() => navigation.push("Search")}
        >
          <Text style={{ color: Colors.secondary }}>TUTORSSSSSss</Text>
          <Icon
            name="search-outline"
            type="ionicon"
            style={{ color: Colors.secondary }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Signed in!</Text>
        <Button title="Sign out" onPress={auth.signOut} />
      </View>
      <Button
        title={"Course Detail"}
        onPress={() => navigation.push("CourseDetail")}
      ></Button>
      <ScrollView style={styles.bg}>
        <View style={styles.view}>{majors}</View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bg: {
    backgroundColor: Colors.white,
  },
  view: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  viewItem: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
  },
  search: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginLeft: 20,
    borderRadius: 30,
    backgroundColor: Colors.gray,
  },
  titleHome: {
    fontWeight: "bold",
    fontSize: 30,
    color: Colors.secondary,
  },
});
