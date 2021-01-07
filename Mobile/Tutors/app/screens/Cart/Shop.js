import React, { useEffect, useState } from 'react'
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Items } from './Items';
import { styles } from "./styles";
import CheckBox from "@react-native-community/checkbox";
export const Shop = (props) => {
  const [selectItem, setselectItem] = props.selectItem;
  const [checkedAll, setCheckedAll] = useState(false);
  const [User, setUser] = props.User;
  const [selectItemOne, setselectItemOne] = useState([])
  const item= []
  useEffect(() => {
    item.push([...selectItemOne])
    // setselectItem([...selectItemOne])
    console.log('================selectItem====================');
    console.log(item);
    console.log('====================================');

  })
  // useEffect(() => {
  //   setItem([...selectItemOne])
  //   setselectItem()
  //   console.log('================Item====================');
  //   console.log(item);
  //   console.log('====================================');

  // }, [selectItemOne])
  return (
    <Card
      containerStyle={styles.card}
      name="Profile"
      key={props.shopName.id}
    >
      <TouchableOpacity
        style={styles.box}
        onPress={() => setCheckedAll(!checkedAll)}
      >
        <CheckBox value={checkedAll} />
        <Card.Title style={styles.card_title}>
          {props.shopName.name}
        </Card.Title>
      </TouchableOpacity>
      {props.shopName.product.map((valueProduct) => {
        return (
          <Items itemSelect={[selectItem, setselectItem]} userID={props.shopName.id} cart={[User, setUser]} product={valueProduct} checkedAll={[checkedAll, setCheckedAll]} x={[selectItemOne, setselectItemOne]}></Items>
        );
      })}
    </Card>
  )
}
