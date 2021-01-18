import {StatusBar, StyleSheet} from "react-native";
import Colors from "../../../configs/Colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    topic: {
        flex: 1,
        marginBottom: 10,
    },
    line: {
        marginVertical: 10,
        marginHorizontal: 8,
        paddingVertical: 0.4,
        backgroundColor: Colors.gray,
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    box: {
        marginTop: -10,
        marginLeft: 8,
        paddingVertical: 1,
        paddingHorizontal: 2.5,
        borderRadius: 30,
        backgroundColor: Colors.primary,
    },
    priceBox: {
        marginLeft: 0,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: Colors.primary,
    },
    priceTitle: {
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.white,
    },
    textRec: {
        flex: 1,
        alignSelf: "center",
        color: Colors.secondary,
        paddingLeft: 5,
        fontSize: 20,
        fontWeight: "bold",
    },
    card: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: Colors.white,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 20,
        elevation: 6,
        borderRadius: 18,
    },
    courseTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.secondary,
        paddingBottom: 10,
    },
    courseDescription: {
        fontSize: 13,
        flex: 1,
        flexWrap: "wrap",
        // backgroundColor: Colors.primary,
        color: Colors.heading,
        paddingBottom: 10,
    },
    bg: {
        backgroundColor: Colors.white,
    },
    view: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    viewItem: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.primary,
    },
    search: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginLeft: 20,
        borderRadius: 30,
        backgroundColor: Colors.gray,
    },
    searchBar: {
        backgroundColor: Colors.primary,
        paddingBottom: 10,
    },
    titleHome: {
        fontWeight: "bold",
        fontSize: 30,
        color: Colors.secondary,
    },
});