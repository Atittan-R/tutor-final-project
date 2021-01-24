import React, {useEffect, useState} from 'react';
import {
    FlatList,
    RefreshControl,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {Icon} from "react-native-elements";
import Colors from "../../configs/Colors";
import API from "../../services/API";
import {useGlobalVar} from "../../context/GlobalContex";
import LoadingScreen from "../../components/Loading";
//

const Inbox = () => {
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;
    const currentUser = JSON.parse(state.userData);
    const [data, setData] = useState({});
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

     const getMessageBox  = async () =>{
        setLoading(true);
        try {
            if(currentUser.id) {
                const response = await API.post(/box/ + currentUser.id);
                setData(response.data)
                setLoading(false);
            }else{
                console.log("Hello")
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getMessageBox().then(() => setRefreshing(false));
    }, []);

    const readMessage = async (id, courseid) =>{
        if(courseid){
            navigation.navigate("Home", {screen: "CourseDetail", params: { course: courseid }})
            console.log(courseid)
        }

        const response = await API.post("/box/read/"+id);
        console.log(response.data.message)
    }

    useEffect( () => {
       function display(){
           getMessageBox();
           if( data){
               setLoading(false);
           }else{
               setLoading(true)
           }
       }
        display();
    },[]);

    return(
        <>
            {/* header */}
            <SafeAreaView style={styles.container}/>
            <View style={styles.headerBar}>
                <Text style={styles.textHeader}>Inbox</Text>
            </View>
            { loading ? <LoadingScreen/> : (
                <FlatList
                    data={data.box}
                    keyExtractor={(item) => item.id}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} enabled={true} />
                    }
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.wrap}
                            onPress={ () => {
                                readMessage(item.id, item.data)
                            }}
                            key={item.id}
                        >
                            <View style={styles.row}>
                                {/*Image*/}
                                <View style={styles.imgLeft}>
                                    {/*<Image*/}
                                    {/*    style={styles.icon}*/}
                                    {/*    source={item.image}/>*/}
                                    <View style={styles.icon} >
                                        <Icon name="mail" type="ionicon" size={30} color={Colors.primary} />
                                        {
                                            item.status === "new" &&
                                            <View style={{backgroundColor: "red", width: 10, height: 10, borderRadius: 100,position: "absolute", top: 8, right: 8}} />
                                        }
                                    </View>
                                </View>

                                {/*Body*/}

                                <View style={styles.body}>
                                    <View style={styles.wrapTitle}>
                                        <Text style={styles.title}>{item.title}</Text>
                                    </View>
                                    <View style={styles.wrapMessage}>
                                        <Text numberOfLines={3} style={styles.message}>
                                            {item.message}
                                        </Text>
                                    </View>
                                    <Text style={[styles.message, styles.clickHere]}>Click Here!</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </>
    );
};

export default Inbox;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headerBar: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
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
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    wrap: {
        flexWrap: "wrap",
        marginVertical: .5,
        backgroundColor: Colors.white,
    },
    imgLeft: {
        flex: 1,
        flexDirection: "column",
        margin: 8,
        alignItems: "center",
        justifyContent:"center",
        // paddingVertical: 10,
        // backgroundColor: Colors.facebookBg,
    },
    icon: {
        height:50,
        width:50,
        borderRadius: 30,
        resizeMode: "contain",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: Colors.gray,
    },
    body: {
        flex: 3,
        margin: 8,
        paddingHorizontal: 4,
        paddingVertical: 4,
        // backgroundColor: Colors.secondary,
    },
    wrapTitle: {
        paddingVertical: 5,
        // backgroundColor: Colors.white
    },
    wrapMessage: {
        paddingVertical: 5,
        // backgroundColor: Colors.gray
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.secondary,
    },
    message: {
        fontSize: 12,
        color: Colors.secondary,
    },
    clickHere: {
        color: "dodgerblue",
        justifyContent: "flex-end"
    }

});