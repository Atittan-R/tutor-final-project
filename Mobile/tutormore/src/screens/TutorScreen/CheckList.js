import React, { useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { Icon } from 'react-native-elements'
import Colors from '../../configs/Colors'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CheckList({ navigation }) {
    const data = [
        { id: 1, date: "Mon 11 Jan 2021" },
        { id: 2, date: "Tue 12 Jan 2021" },
        { id: 3, date: "Wed 13 Jan 2021" },
        { id: 4, date: "Thu 14 Jan 2021" },
        { id: 5, date: "Fri 15 Jan 2021" },
        { id: 1, date: "Mon 11 Jan 2021" },
        { id: 2, date: "Tue 12 Jan 2021" },
        { id: 3, date: "Wed 13 Jan 2021" },
        { id: 4, date: "Thu 14 Jan 2021" },
        { id: 5, date: "Fri 15 Jan 2021" },
        { id: 1, date: "Mon 11 Jan 2021" },
        { id: 2, date: "Tue 12 Jan 2021" },
        { id: 3, date: "Wed 13 Jan 2021" },
        { id: 4, date: "Thu 14 Jan 2021" },
        { id: 5, date: "Fri 15 Jan 2021" },

    ];
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState();
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showDatePickerStart = () => {
        setShow(true);
    };
    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.space}>
                <View style={styles.headerBar}>
                    <TouchableOpacity
                        style={{ color: Colors.secondary, marginRight: 10 }}
                        onPress={() => navigation.pop()}>
                        <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Check List{date.getDate()} {date.getMonth() + 1} {date.getFullYear()}</Text>
                </View>
                <TouchableOpacity
                    style={styles.add}
                    onPress={showDatePickerStart}
                >
                    <Text style={{ fontSize: 12, color: Colors.secondary }}>event</Text>
                    <Icon name="event" type="material" color={Colors.secondary} />
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <TouchableOpacity>
                        <View style={styles.viewItem}>
                            <Text style={styles.title}>{item.date}</Text>
                            <Icon name="navigate-next" type="material" color={Colors.secondary} />
                        </View>
                    </TouchableOpacity>
                }
            />
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headerBar: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.primary
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.secondary,
    },
    space: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.primary
    },
    viewItem: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: Colors.white
    },
    add: {
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center"
    },
})