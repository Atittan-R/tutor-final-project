import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
    TextInput,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../config/colors";
import { StyleSheet } from "react-native";

const Payment = (props) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const { textValue1,  textValue2, textValue3, textValue4, textValue5, textValue6,} = props;
    return (
        <>
            <ScrollView style={{ backgroundColor: colors.bg }}>
                <SafeAreaView style={styles.contrainer}>
                    <View style={styles.coverArea}>
                        <View style={styles.viewItem}>
                            <Text>Total Price</Text>
                            <Text>฿400</Text>
                        </View>
                        <View style={styles.viewItem}>
                            <Text>Payment</Text>
                            <Text>KTB [*1234]</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
            <View style={styles.menu}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View
                                style={{
                                    paddingVertical: 10,
                                    borderBottomColor: colors.second,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    alignItems: "center"
                                }}>
                                <Text style={{ fontWeight: "bold" }}>Enter your pin for transaction</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <TextInput value={textValue1} style={styles.textInput} maxLength={1}/>
                                <TextInput value={textValue2} style={styles.textInput} />
                                <TextInput value={textValue3} style={styles.textInput} />
                                <TextInput value={textValue4} style={styles.textInput} />
                                <TextInput value={textValue5} style={styles.textInput} />
                                <TextInput value={textValue6} style={styles.textInput} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <View style={{ flexDirection: "row", justifyContent: "center" }}>                                
                                    <TouchableHighlight
                                        style={[styles.closeButton, { margin: 20 }]}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}>
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={[styles.closeButton, { margin: 20, paddingHorizontal: 25 }]}
                                    >
                                        <Text style={styles.textStyle}>Save</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={styles.menuButton}
                    onPress={() => {
                        setModalVisible(true);
                    }}>
                    <Text style={styles.menuText}> Buy </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Payment;
