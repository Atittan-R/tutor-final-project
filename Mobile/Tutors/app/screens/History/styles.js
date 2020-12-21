import { cloneElement } from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 0,
 
    },
    box: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
        flexGrow: 1,
  
    },
    box_Cart: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        // backgroundColor:"red",
       justifyContent:"space-between",
       marginBottom:10

       
    },
    box_Product: {
        display: "flex",
        flexGrow: 1,
        padding:0,
        justifyContent:"center",
        // backgroundColor:"blue",
        alignItems:"center"
    },
    box_Text: {
        marginHorizontal:10,
        fontSize:15,
        color:"#47524E",
        marginBottom:10
    },
    box_Text_red: {
        marginHorizontal:10,
        fontSize:15,
        color:"red",
        marginBottom:10
    },
    box_Text_content: {
        width: 212,
        paddingHorizontal:20,
        paddingVertical:5,
        fontSize:12,
        height:30,
        backgroundColor: "#BAE367",
        color:"#47524E",
    },
    card: {
        padding: 10,
        margin: 0,
        marginTop: 20,
        flexGrow: 1,
        display:'flex',
       
    },
    card_title: {
        fontSize: 20,
        textAlign: 'left'
    },
   
    button_container_Add: {
        padding: 0,
        margin: 0,
        height: 55,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    
    },
    button_container: {
        padding: 0,
        margin: 0,
        height: 55,
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
    
    },
    buttons: {
        display:'flex',
        flexDirection:'row',
      width:100,
        justifyContent: "center",
        flexGrow: 1,
        marginHorizontal:20,
        
    },
    buttons_Add: {
        justifyContent: "center",
        backgroundColor: "#BAE367",
        alignSelf:"flex-end",
        borderRadius:25
        
    },
    buttons_Buy: {
        width:125   ,
        justifyContent: "center",
        flexGrow: 1,
        marginHorizontal:20,
        backgroundColor: "#BAE367",
        alignSelf:"flex-end"
    },
    buttons_text: {
        marginTop:10,
        flexGrow: 1,
        fontSize:20,
        textAlign: "center"
    },
    img:{
        width:100,
        height:100
    }
})