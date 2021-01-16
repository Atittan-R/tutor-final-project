import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import Colors from '../../configs/Colors';

export default function Search({ navigation }) {

    // search bar
    const [search, setSearch] = useState('');
    const updateSearch = (search) => {
        setSearch({ search });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewItem}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" type="ionicon" style={{ color: Colors.secondary }} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Search"
                    onChangeText={updateSearch}
                    value={search}
                    style={styles.search} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    inputContainerStyle: {
        backgroundColor: Colors.primary,
    },
    inputStyle: {
        backgroundColor: Colors.gray,
        borderRadius: 30,
        paddingHorizontal: 20,

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
        backgroundColor: Colors.gray
    },
    viewItem: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.primary
    },
})