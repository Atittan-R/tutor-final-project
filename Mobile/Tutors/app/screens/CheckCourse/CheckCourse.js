import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

const data = [
    {
        id: 1,
        name: "Yami",
        date: "Mon Wed Fri",
        time: "17.0-21.0",
    },
    {
        id: 2,
        name: "Pixels",
        date: "Mon Wed Fri",
        time: "17.0-21.0",
    },
    {
        id: 3,
        name: "Momoka",
        date: "Mon Wed Fri",
        time: "17.0-21.0",
    },
]
const CheckCourse = () => {
    return (
        <View style={styles.contrainer}>
            <View style={styles.viewContent}>
                <View style={styles.viewItem}>
                    <Text style={{ fontWeight: "bold" }}>Name</Text>
                    <Text style={{ fontWeight: "bold" }}>Date</Text>
                    <Text style={{ fontWeight: "bold" }}>Time</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.viewItem}>
                            <Text>{item.name}</Text>
                            <Text>{item.date}</Text>
                            <Text>{item.time}</Text>
                        </View>
                    )} />
            </View>
        </View>
    )
}

export default CheckCourse;
