import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import Colors from "../../configs/Colors";

export default PrimaryButton = (props) => {
    const {label, onPress, disable} = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.btn,{backgroundColor: !disable ? Colors.gray : Colors.primary}]} title={label} onPress={onPress} disabled={!disable}>
                <Text style={styles.label}> {label} </Text>
            </TouchableOpacity>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    btn: {
        borderRadius: 30,
    },
    label: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        color: Colors.white,
        // fontFamily: "HelveticaNeue",
        padding: 20,
    },
});
