import { StatusBar, StyleSheet } from "react-native";
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
    cateWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginHorizontal: 20,
    },
    touchStyle: {
        marginHorizontal: 5,
        padding: 5,
        flex: 1,
        alignItems: "center",
    },
    touchView: {
        padding: 3,
        backgroundColor: Colors.gray,
        borderRadius: 23,
    },
    touchImage: {
        width: 50,
        height: 50,
        resizeMode: "contain"
    },
    touchTopic: {
        marginVertical: 3,
        fontSize: 12,
        textAlign: "center"
    },
    listStyle: {
        padding: 5,
        flex: 1,
        alignItems: "center",
        width: 120,
        flexWrap: "wrap",

    },
    listImage: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        alignSelf: "center",
    },
    listName: {
        marginVertical: 2, fontWeight: "bold"
    },
    listDesc: {
        fontSize: 12
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
    courseWrap: {
        backgroundColor: "#fff",
        padding: 5,
        flexDirection: "row",
        marginHorizontal: 2,
        flexWrap: "wrap"
    },
    courseView: {
        flex: 1, marginLeft: 10, justifyContent: "flex-start", alignItems: "flex-start"
    },
    courseName: {
        fontWeight: "bold",
        color: Colors.secondary,
    },
    courseImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    courseDescription: { color: "gray", fontSize: 12, },
    courseViewDetail: { flexDirection: "row", alignItems: "center", marginTop: 12 },
    courseDetail: { flexDirection: "row", alignItems: "center", marginTop: 5 },
    bg: {
        backgroundColor: Colors.white,
    },
    textGray: {
        color: "gray",
        fontSize: 12,
        marginHorizontal: 5
    },
    textBlack: {
        color: Colors.secondary,
        fontSize: 12,
        marginHorizontal: 5
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
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

});