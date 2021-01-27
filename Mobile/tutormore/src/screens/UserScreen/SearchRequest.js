import React, { useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import Colors from '../../configs/Colors';

const data = [
    { key: "1", title: "Android" },
    { key: "2", title: "IOS" },
    { key: "3", title: "React" },
    { key: "4", title: "Node JS" },
    { key: "5", title: "Java" },
    { key: "6", title: "PHP" },
    { key: "7", title: "Javascript" },

];
export default function Search({ navigation }) {

    // search bar
    const [search, setSearch] = useState({ data: data, search: "text" });
    const [filterItem, setFilterItem] = useState(null)
    const searchAction = (text) => {
        // const newData = data.filter(item => {
        //     const itemData = `${item.title}`;
        //     const textData = text;
        //     return itemData.indexOf(textData) > -1;

        // });
        // console.log("text: " + text);
        // setSearch(newData);
        setFilterItem(data.filter(i => i.title.toLowerCase().includes(text.toLowerCase())))
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewItem}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" type="ionicon" style={{ color: Colors.secondary }} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Search"
                    onChangeText={(text) => searchAction(text)}
                    value={search}
                    style={styles.search} />
            </View>
            <FlatList
                data={filterItem ? filterItem : data}
                keyExtractor={item => item.key}
                renderItem={({ item }) =>
                    <View key={item.key} style={styles.item}>
                        <TouchableOpacity >
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                }

            />

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
    }
});