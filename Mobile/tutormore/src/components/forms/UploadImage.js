import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, Text } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import Colors from '../../configs/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

export default function UploadImage() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={{ alignItems: "center", marginVertical: 20 }}>
            {image && <Image source={{ uri: image }}
                style={{ width: 150, height: 150, borderColor: Colors.primary, borderWidth: 3, borderRadius: 10 }} />}
            <TouchableOpacity
                style={{ flex: 0, justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}
                onPress={pickImage}>
                <Text style={styles.text}>Choose image</Text>
                <Icon name="insert-photo" type="material" color={Colors.secondary} />
            </TouchableOpacity>
        </View>

    );
}
export const styles = StyleSheet.create({
    inputItem: {
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
    textDate: {
        backgroundColor: Colors.background,
        borderRadius: 5,
        paddingHorizontal: 20,
        flex: 0.8,
        paddingVertical: 13,
    },
    drop: {
        height: 20,
        width: 200,
        justifyContent: "space-between",
        fontSize: 20,
        color: Colors.secondary
    },
    text: {
        color: Colors.secondary,
        fontSize: 12
    },
    map: {
        height: 150,
        width: 230
    },
});
