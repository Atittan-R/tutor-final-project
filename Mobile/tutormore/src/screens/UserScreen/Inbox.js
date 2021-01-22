import React from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {Icon} from "react-native-elements";
import Colors from "../../configs/Colors";
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

const data = [{
    image: require("../../assets/Appicon.png"),
    title: "Hello Title",
    message: "message from the other side message from the other side message from the other side message from the other side"
}, {
    image: require("../../assets/Appicon.png"),
    title: "Hello Title",
    message: "message from the other side message from the other side message from the other side message from the other side"
}, {
    image: require("../../assets/Appicon.png"),
    title: "Hello Title",
    message: "message from the other side message from the other side message from the other side message from the other side"
}, {
    image: require("../../assets/Appicon.png"),
    title: "Hello Title",
    message: "message from the other side message from the other side message from the other side message from the other side"
},{
    image: require("../../assets/Appicon.png"),
    title: "Hello Title",
    message: "message from the other side message from the other side message from the other side message from the other side"
},{
    image: require("../../assets/Appicon.png"),
    title: "Hello Title",
    message: "message from the other side message from the other side message from the other side message from the other side"
},]

const Inbox = () => {
    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container}/>
            <View style={styles.headerBar}>
                <Text style={styles.textHeader}>Inbox</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.wrap}>
                        <View style={styles.row}>
                            {/*Image*/}
                            <View style={styles.imgLeft}>
                                <Image
                                    style={styles.icon}
                                    source={item.image}/>
                            </View>

                            {/*Body*/}
                            <View style={styles.body}>
                                <View style={styles.wrapTitle}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                                <View style={styles.wrapMessage}>
                                    <Text numberOfLines={3} style={styles.message}>
                                        {item.message}
                                    </Text>
                                </View>
                                <Text style={[styles.message, styles.clickHere]}>Click Here!</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </>
    );
};

export default Inbox;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headerBar: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
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
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    wrap: {
        flexWrap: "wrap",
        margin: 10,
        borderRadius: 4,
        backgroundColor: Colors.white,
    },
    imgLeft: {
        flex: 1,
        flexDirection: "column",
        margin: 8,
        paddingRight: 10,
        // paddingVertical: 10,
        // backgroundColor: Colors.facebookBg,
    },
    icon: {
        // height: responsiveHeight(25),
        // width: responsiveWidth(25),
        height: 100,
        width: 100,
        resizeMode: "contain",
        // backgroundColor: Colors.gray,
    },
    body: {
        flex: 3,
        margin: 8,
        paddingHorizontal: 4,
        paddingVertical: 4,
        // backgroundColor: Colors.secondary,
    },
    wrapTitle: {
        paddingVertical: 5,
        // backgroundColor: Colors.white
    },
    wrapMessage: {
        paddingVertical: 5,
        // backgroundColor: Colors.gray
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.secondary,
    },
    message: {
        fontSize: 12,
        color: Colors.secondary,
    },
    clickHere: {
        color: "dodgerblue",
        justifyContent: "flex-end"
    }

});