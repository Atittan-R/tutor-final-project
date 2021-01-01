import React, { useState } from 'react'
import { Picker, View, Text, StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const TermCourse = (props) => {
    const [term, setTerm] = props.term;
    return (
        <View style={styles.inputItem}>
            <Text style={{ flex: 0.35 }}> Duration </Text>
            <View style={styles.textDate} >
                <Picker
                    selectedValue={term}
                    style={styles.drop}
                    onValueChange={(itemValue, itemIndex) => setTerm(itemValue)}
                >
                    <Picker.Item label="" value="" />
                    <Picker.Item label="14 Days" value="14 Days" />
                    <Picker.Item label="1 Month" value="1 Month" />
                    <Picker.Item label="3 Month" value="3 Months" />
                    <Picker.Item label="6 Month" value="6 Months" />
                </Picker>

            </View>
        </View>
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
    textDate: {
        backgroundColor: colors.bg,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 0.8,
        paddingVertical: 13,
        justifyContent: "space-between",
    },
    drop: {
        height: 20,
        width: 200,
        justifyContent: "space-between",
        fontSize: 20
    },
})