import CheckBox from "@react-native-community/checkbox";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, Text, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Shop } from "./Shop";

import { styles } from "./styles";

const Cart = ({ navigation }) => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState(false);
  const Check = () => {
    checkedAll ? setChecked(true) : checked;
  };
  const [selectItem, setselectItem] = useState([])
const [totalPrice, settotalPrice] = useState(0)
const [User, setUser] = useState([
    {
      id: 1,
      name: "Yami Sukehiro",
      checkedAll: false,
      product: [
        { id: 1, name: "Database", price: 450, checked: false },
        { id: 2, name: "Compro1", price: 500, checked: false },
        { id: 3, name: "Compro2", price: 600, checked: false }
      ],
    },
    {
      id: 2,
      name: "You",
      checkedAll: false,
      product: [
        { id: 1, name: "Eng", price: 450, checked: false },
        { id: 2, name: "Compro2", price: 500, checked: false },
      ],
    },
    {
      id: 3,
      name: "prik",
      checkedAll: false,
      product: [{ id: 1, name: "Java", price: 600, checked: false }],
    },
  ]);

//   useEffect(() => {
//     console.log("setItem "+selectItem);
//     const x = selectItem.reduce(
//       (sumPrice, product) => 
//         sumPrice + product.price, 0)
//         // console.log(x);
//     settotalPrice(x)
//  }, [selectItem])


  return (
    <>
      <ScrollView style={styles.container}>
        {User.map((valueUser) => {
          return (
          <Shop shopName={valueUser} selectItem={[selectItem, setselectItem]} User={[User, setUser]}/>
          )
        })}
      </ScrollView>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.buttons}>
          <CheckBox value={checkedAll} />
          <Text> all </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text> total price:฿ {totalPrice} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons_Buy}
          onPress={() => navigation.push("ConfirmOrder")}
        >
          <Text style={styles.buttons_text}> Buy </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Cart;
