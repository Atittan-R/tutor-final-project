import React, { useState } from 'react'
import { Picker, View, Text, StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const TermCourse = () => {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <View style={styles.inputItem}>
            <Text style={{ flex: 0.35 }}> Duration </Text>
            <View style={styles.textDate} >
                <Picker
                    selectedValue={selectedValue}
                    style={styles.drop}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="14 Days" value="1" />
                    <Picker.Item label="1 Month" value="2" />
                    <Picker.Item label="3 Month" value="3" />
                    <Picker.Item label="6 Month" value="4" />
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