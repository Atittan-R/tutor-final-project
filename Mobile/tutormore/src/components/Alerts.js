import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';


export default function Alert(props) {
    const { text, alert } = props;
    const [Alert, setAlert] = props.alert
    const [msg, setText] = props.text

    console.log(Alert);
    console.log(msg);
    return (
        <View style={styles.container}>
            <AwesomeAlert 
           
            contentContainerStyle={{height:200 ,justifyContent:"center"}}
            contentStyle={{width:250 ,justifyContent:"center"}}
            overlayStyle={{height:1000}}
                show={Alert}
                showProgress={true}
                title={"Alert"}
                message={msg}
                closeOnTouchOutside={true}
                useNativeDriver={true}
                closeOnHardwareBackPress={true}
                showConfirmButton={true}
                confirmText="OK"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    setAlert(false);
                }}
                onConfirmPressed={() => {
                    setAlert(false);
                }}
                onDismiss={() => {
                    setAlert(false);
                }}
            />
       </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignContent:"space-around"
      },
    button: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#AEDEF4",
    },
    text: {
        color: '#fff',
        fontSize: 15,
  
        
    }
});