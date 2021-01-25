import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Colors from "../../configs/Colors"

export default TextInputButton = (props) => {
    const { label, placeholder, keyboardType, onTextChange, value, editable } = props
    // const [valueText, setValueText] = useState();
    return (
        <View style={styles.inputItem}>
            {/* <Text style={{ flex: 0.35, color: Colors.secondary }}>{label}</Text> */}
            <TextInput
                editable={editable}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                color={Colors.secondary}
                style={styles.textInput}
                onChangeText={onTextChange} />

        </View>

    )
}
export const styles = StyleSheet.create({
    inputItem: {
        marginVertical: 5,
        borderRadius: 20,
        backgroundColor: Colors.background,
    },
    textInput: {
        padding: 15,
        fontSize: 16,
    },

})
