import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../configs/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function Clock(props) {
    const { label, callback, value } = props;
    const [claerdate, setClaerDate] = props.claerdate;
    const [date, setDate] = useState(new Date(0, 0, 0, 0));
    const [show, setShow] = useState();
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showTimepickerStart = () => {
        setShow(true);
    };
    useEffect(() => {
        if (claerdate) {
            setDate(new Date(0, 0, 0, 0))
            setClaerDate(false)
        }
    }, [claerdate])
    useEffect(() => {
        callback(date)
    }, [date])


    return (
        <View style={styles.inputItem}>
            {/* <Text style={{ flex: 0.35, color: Colors.secondary }}>{label}</Text> */}
            <View style={styles.textDate} >
                <Text style={styles.text}>{date.getHours()}:{(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}</Text>
                <TouchableOpacity onPress={showTimepickerStart}>
                    <Icon name={'clock'} type={'feather'} color={Colors.secondary} />
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
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        flex: 1,
    },
    textDate: {
        backgroundColor: Colors.background,
        borderRadius: 20,
        padding: 15,
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        justifyContent: "space-between",
    },
    text: {
        color: Colors.secondary,
        fontSize: 16,
    }
})