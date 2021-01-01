import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../config/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
export const Clock = (props) => {
    const { label } = props;
    const [date, setDate] = props.time;
    const [show, setShow] = props.show;
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showTimepickerStart = () => {
        setShow(true);
    };
    return (
        <View style={styles.inputItem}>
            <Text style={{ flex: 0.35 }}> {label} </Text>
            <View style={styles.textDate} >
                <Text>{date.getHours()}:{date.getMinutes()}</Text>
                <TouchableOpacity onPress={showTimepickerStart}>
                    <Icon name={'clock'} type={'feather'} color={colors.second} />
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        value={date}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    inputItem: {
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.white,
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
})