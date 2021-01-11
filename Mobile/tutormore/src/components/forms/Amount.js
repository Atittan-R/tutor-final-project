import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Colors from '../../configs/Colors';
export default function Amount(props) {
    const { label, placeholder } = props
    const [valueText, setValueText] = useState();
    return (
        <View style={styles.inputItem}>
            <Text style={{ flex: 0.35, color: Colors.secondary }}>{label}</Text>
            <TextInput
                value={valueText}
                placeholder={placeholder}
                keyboardType="decimal-pad"
                color={Colors.secondary}
                style={styles.textInput}
                onChangeText={setValueText}
            />
        </View>
    );
}
export const styles = StyleSheet.create({
    inputItem: {
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        flex: 1,
    },
    textInput: {
        backgroundColor: Colors.background,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 0.8,
    },
});
