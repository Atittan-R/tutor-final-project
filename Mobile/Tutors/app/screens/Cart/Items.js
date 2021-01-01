import CheckBox from '@react-native-community/checkbox'
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './styles'

export const Items = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(props.product.checked)
    const [cart, setcart] = props.cart
    const [amount, setamount] = useState(1)
    const [checkedAll, setCheckedAll] =props.checkedAll
    const [selectItem, setselectItem] = props.itemSelect
    const [selectItemOne, setselectItemOne] = props.x
    // const [selectItemOwe, setselectItemOwe] = useState([])
    const CheckAmount = (s) => {
        setselectItem(selectItem.filter(e => e !== props.product))
        if (s == 'add') {
            setamount(amount + 1)
        } else {
            setamount(amount - 1)
            // console.log('====================================');
            // console.log(selectItem);
            // console.log('====================================');



        }
    }
     function loop (){
        var x = []
        for (let index = 0; index < amount; index++) {
            x.push(props.product)//เก็บค่าลงตะกร้า
            // console.log('================ item ====================');
            // console.log(x);
            // console.log('====================================');
            
        }
         setselectItemOne(x)
        //  console.log('================ item ====================');
        //  console.log(selectItemOne);
        //  console.log('====================================');
         
        //  setselectItem(selectItemOne)
        }

        const CheckeProduct = (newvalue) => {
            setToggleCheckBox(newvalue)
            // console.log(newvalue);
            // console.log("Usecahr : " + props.userID + " Product : " + props.product.id)
            const uesr = cart.find((c => c.id == props.userID))
            const product = uesr.product.find((item => item.id == props.product.id))
            product.checked = newvalue
            setcart([...cart])
            // for (let index = 0; index < amount; index++) {
            //     setselectItem([...selectItem, props.product])   
            // }

            // console.log("name : " + product.name + " result :" + result)

            // cart.map((item) => { console.log(item); })
            // return result;
        }
        useEffect(() => {
           //สร้างตะกร้าปล่าว
            if (toggleCheckBox == true) {

            
                loop();


                //   setselectItem(x)
                // setselectItem([...selectItemOne])

                // console.log(selectItem);
            } else {
                setselectItem(selectItem.filter(e => e !== props.product))

            }
        }, [toggleCheckBox, amount])

        // useEffect(() => {
        //     setselectItem(selectItemOne)
        //     console.log(selectItem);
        //     console.log('================selectItem====================');
        //     console.log(selectItem);
        //     console.log('====================================');

        // }, [selectItemOne])
        // useEffect((s) => {
        //     if (s == 'add') {
        //         setamount(amount + 1)
        //         props.product.price = props.product.price * amount
        //         setselectItem([...selectItem, props.product])
        //     } else {

        //         // setamount(amount - 1)
        //         // const index = selectItem.indexOf(amount-1);
        //         // if (index > -1) {
        //         //     selectItem.splice(index, 1);
        //         // }
        //         // console.log('====================================');
        //         // console.log(selectItem);
        //         // console.log('====================================');
        //         // setselectItem(selectItem.filter(e => e !== props.product))

        //     }

        // }, [amount])
        useEffect(() => {
            CheckeProduct(checkedAll) //checkAll = true ให้ฟันชั้น CheckeProduct ทำงาน
        }, [checkedAll])
        return (
            <View
                name="Cart"
                style={styles.box_Cart}
                key={props.product.id}
            >
                <CheckBox
                    value={props.product.checked}
                    onValueChange={
                        (newvalue) => {
                            CheckeProduct(newvalue)

                        }
                        // setCheckedId(props.product.id)
                    }
                />
                <Image
                    style={styles.img}
                    source={require("../../assets/Appicon.png")}
                />

                <View name="product" style={styles.box_Product}>
                    <Text style={styles.box_Text}>{props.product.name}</Text>
                    <Text style={styles.box_Text_red}>
                        $ {props.product.price}
                    </Text>
                    <View style={styles.button_container_Add}>
                        <TouchableOpacity style={styles.buttons_Add} onPress={() => CheckAmount('add')}>
                            <Text style={styles.box_Text}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.box_Text}>{amount}</Text>
                        <TouchableOpacity style={styles.buttons_Add} onPress={() => CheckAmount()} disabled={amount == 1} >
                            <Text style={styles.box_Text}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
