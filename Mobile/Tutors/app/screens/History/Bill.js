import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../config/colors'
import QRCode from "react-native-qrcode-svg";


export const Bill = (props) => {
    const [modalVisible, setModalVisible] = props.modalVisible;

    return (

        <Modal animationType={"slide"} transparent={true} visible={modalVisible} >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View
                        style={{
                            paddingVertical: 10,
                            borderBottomColor: colors.second,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            alignItems: "center",
                            marginBottom: 20
                        }}>
                        <Text style={{ fontWeight: "bold" }}>Bill</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        <View>
                            <Text style={{ fontWeight: "bold" }}>database</Text>
                            <Text>Mon Wed Fri</Text>
                            <Text>17.0 - 21.0</Text>
                            <Text>x 1</Text>
                            <Text>450</Text>
                        </View>
                        <View>
                            <QRCode size={70} value="http://awesome.link.qr" />
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => { setModalVisible(!modalVisible) }}>
                    <Text style={styles.textClose}>Close</Text>
                </TouchableOpacity>

            </View>
        </Modal>

    )
}
export const styles = StyleSheet.create({
    inputItem: {
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        marginHorizontal: 0,
        backgroundColor: "#000",
    },
    modalView: {
        margin: 0,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 20,
        alignItems: "stretch",
        elevation: 2,
        marginHorizontal: 20,

    },
    textClose: {
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderBottomColor: colors.white,
        textAlign: "center",
        color: colors.white
    },
});