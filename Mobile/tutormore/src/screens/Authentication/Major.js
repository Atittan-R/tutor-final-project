import React from "react";
import {Button, Text, View} from "react-native";

export default function Major({navigation}) {
    return (
        <View>
            <Text>Major</Text>
            <Button
                title={"Tutor Register"}
                onPress={() => navigation.push("TutorRegister")}
            />
        </View>
    );
}
