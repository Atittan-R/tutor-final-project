import {ActivityIndicator, Text, View} from "react-native";
import React from "react";
import Colors from "../configs/Colors";

export default function NoDataScreen({data}) {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.white
        }}>
            <Text style={{textAlign: "center", fontSize: 35, color: "#B5B5B5"}}>No Data {"\n" + data? data : ""}</Text>
        </View>
    );
}