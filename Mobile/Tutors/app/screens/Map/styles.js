import { Platform, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 0,
        margin: 0,
    },
    box: {
        display: "flex",
        flexDirection: "row",
        padding: 5,
        flexGrow: 1,
        marginBottom: 10,

    },
    box_Text: {
        width: 80,
        marginHorizontal:10,
        fontSize:20,
        color:"#47524E",
    },
    box_Text_content: {
        
        width: 212,
        paddingHorizontal:20,
        paddingVertical:5,
        fontSize:12,
        height:30,
        borderRadius: 50,
        backgroundColor: "#BAE367",
        color:"#47524E",
    },
    card: {
        padding: 10,
        margin: 0,
        marginTop: 20,
        flexGrow: 1
    },
    card_title: {
        fontSize: 20,
        textAlign: 'left'
    },
    map: {
        height: 200,
        borderRadius: 50
    },
 
    button_container: {
        padding: 0,
        margin: 0,
        height: 55,
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "center"
    },
    buttons: {
        justifyContent: "center",
        flexGrow: 1,
        marginHorizontal:20,
    },
    buttons_Buy: {
        justifyContent: "center",
        flexGrow: 1,
        marginHorizontal:20,
        backgroundColor: "#BAE367"

    },
    buttons_text: {
        marginTop:10,
        flexGrow: 1,
        fontSize:20,
        textAlign: "center"
    },
})
