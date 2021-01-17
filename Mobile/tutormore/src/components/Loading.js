import {ActivityIndicator, View} from "react-native";
import React from "react";

export default function LoadingScreen() {
    return (
        <View style={[{
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
            padding: 10
        }]}>
            <ActivityIndicator size="large" color="#00ff00"/>
        </View>
    );
}