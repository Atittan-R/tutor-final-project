import { Platform, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 0,
        margin: 0,
        flexGrow: 1
    },
    box: {
        display: "flex",
        flexDirection: "row",
        padding: 5,

    },
    box_Text: {
        width: 80,
        marginRight: 10
    },
    card: {
        padding: 10,
        margin: 0,
        marginTop: 20
    },
    card_title: {
        fontSize: 25,
        textAlign: 'left'
    },
    map: {
        height: 200,
        opacity:0.5,
        borderRadius:50
    },
    map_btn: {
        position: "absolute",
        backgroundColor: "#BAE367",
        top:100,
        left:150, 
    },
    button_container: {
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "center"
    },
    buttons: {
        justifyContent: "center",
        flexGrow: 1
    },
    buttons_Buy: {
        justifyContent: "center",
        flexGrow: 1,
        backgroundColor: "#BAE367"

    },
    buttons_text: {
        textAlign: "center"
    }

})