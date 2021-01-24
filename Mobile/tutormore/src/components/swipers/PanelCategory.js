import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../configs/Colors";
import { useNavigation } from '@react-navigation/native';

const PanelCategory = ({category}) => {
    const navigation = useNavigation();
    const majors = category.map((cate) => (
        <View style={styles.container} key={cate.id}>
            <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate("List", {categories: cate.name})}>
                <View style={styles.press}>
                    <Image
                        style={styles.image}
                        source={cate.image}
                    />
                </View>
                <Text style={styles.text}>
                    {cate.name}
                </Text>
            </TouchableOpacity>
        </View>
        )
    );
    return (
        <View style={styles.wrap}>
            {majors}
        </View>

    );
};
export default PanelCategory;

const styles = StyleSheet.create({
    wrap:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        margin: 20,
    },
    container:{
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        width: 100,
        height: 100,
        margin: 6,
        padding: 10,
    },
    touchView: {
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    text: {
        marginVertical: 3,
        fontSize: 12,
        textAlign: "center"
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: "contain"
    },
    press: {
        backgroundColor: Colors.gray,
        borderRadius: 20,
    }
});
