import CheckBox from "@react-native-community/checkbox";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";


import { styles } from "./styles";

const Cart = () => {
    const [checkedAll, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkedId, setCheckedId] = useState(false);
    const Check = () => {
        (checkedAll) ? setChecked(true) : checked
    }
    const [User, setUser] = useState(
        [{
            id: 1,
            name: "Yami Sukehiro",
            checkedAll: false,
            product: [{ id: 1, name: "Database", price: 450, checked: checked }, { id: 2, name: "Compro1", price: 500, checked: checked }]
        },
        {
            id: 2,
            name: "You",
            checkedAll: false,
            product: [{ id: 1, name: "Eng", price: 450, checked: checked }, { id: 2, name: "Compro2", price: 500, checked: checked }]
        }, {
            id: 3,
            name: "prik",
            checkedAll: false,
            product: [{ id: 1, name: "Java", price: 600, checked: checked }]
        }]
    )

    function CheckeID(id){
        const uesr = User.find((user => user.id == 1))
        const product = uesr.product.find((item => item.id == id))
        product.checked=checked
    
    }
    // function CheckeProduct(Userindex, Productindex, newvalue) {
    //     console.log(newvalue);
    //     console.log("Usecahr : " + Userindex + " Product : " + Productindex)
    //     const uesr = User.find((user => user.id == Userindex))
    //     const product = uesr.product.find((item => item.id == Productindex))
    //     const result = product.checked = newvalue
    //     // console.log("name : " + product.name + " result :" + result)
    //     // console.log("checked : " + checked)
    //     // console.log(User)
    //     return result;

        // User.map((user)=>{
        //     user.product.find((item)=>{ item.id==indexX
        //     // return item.checked=!item.checked.
        //     console.log("index: "+item.id+"name: "+item.name)
        //     console.log("\n.........................")
        // })

        // })
    // }
    // useEffect(() => {
    //     CheckeID(checkedId);

    // },[checked]);

    return (
        <>
            <ScrollView style={styles.container}>
                {
                    User.map((valueUser) => {
                        return <Card containerStyle={styles.card} name="Profile" key={valueUser.id}>
                            <TouchableOpacity style={styles.box} onPress={() => setCheckedAll(!checkedAll)}>
                                <CheckBox
                                    value={checkedAll}
                                />
                                <Card.Title style={styles.card_title}>{valueUser.name}</Card.Title>
                            </TouchableOpacity>
                            {
                                valueUser.product.map((valueProduct) => {
                                    return <View name="Cart" style={styles.box_Cart} key={valueProduct.id}>
                                        <CheckBox
                                            value={valueProduct.checked}
                                            onValueChange={(newvalue) => 
                                                setChecked(newvalue)
                                                // setCheckedId(valueProduct.id)
                                            }
                                        />
                                        <Image style={styles.img}
                                            source={require('../../assets/Appicon.png')}
                                        />

                                        <View name="product" style={styles.box_Product}  >
                                            <Text style={styles.box_Text}>{valueProduct.name}</Text>
                                            <Text style={styles.box_Text_red}>$ {valueProduct.price}</Text>
                                            <View style={styles.button_container_Add}>
                                                <TouchableOpacity style={styles.buttons_Add}>
                                                    <Text style={styles.box_Text}>+</Text>
                                                </TouchableOpacity>
                                                <Text style={styles.box_Text}>0</Text>
                                                <TouchableOpacity style={styles.buttons_Add}>
                                                    <Text style={styles.box_Text}>-</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>

                                })
                            }
                        </Card>
                    })
                }
            </ScrollView>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.buttons}>
                    <CheckBox
                        value={checkedAll}
                    />
                    <Text> all </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text> total price:฿850 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons_Buy}>
                    <Text style={styles.buttons_text}> Buy </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Cart;
