import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Colors from "../../configs/Colors";
import { Icon, Tooltip } from 'react-native-elements';
import API from '../../services/API';

export default function Scanner({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // data คือข้อมูลที่ได้จากการสแกน
    const handleBarCodeScanned =  async({ type, data }) => {
        setScanned(true);
        // ;
        try {
           const value=data.split('/')
           console.log(value[0],value[1]);
            const attendance=await API.post("/attendance",{
               courseId:parseInt(value[0]),
               userId:parseInt(value[1])
             
             })
             console.log(attendance.data);
             alert(attendance.data.status);
             navigation.navigate("Course", { screen: "Attendance" })
        } catch (error) {
             alert(error);
        }
    // console.log();
    // // console.log('====================================');
    // // console.log(data[0]);
    // // console.log('====================================');
        // alert(`${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <TouchableOpacity
                    style={{ color: Colors.secondary, marginRight: 10 }}
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Scan QR Code</Text>
            </View>
            <View style={styles.scan}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} backgroundColor={Colors.primary} />}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headerBar: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "flex-start",
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
    scan: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: Colors.primary,
    },
});

