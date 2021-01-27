import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {
    ActivityIndicator,
    Button,
    FlatList,
    RefreshControl,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { actionCreators, initialState, reducer } from './CourseReducer'
import API from "../../../services/API";
import Modal from 'react-native-modal';
import LoadingScreen from "../../../components/Loading";

const wait = timeout => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};

const MyComponent = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState)

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchData().then(() => setRefreshing(false));
    }, []);

    async function fetchData() {
        dispatch(actionCreators.loading())
        try {
            const response = await API.get(
                '/course/findAll'
            )
            const course = await response.data.course
            console.log("course:",course)
            dispatch(actionCreators.success(course))
        } catch (e) {
            dispatch(actionCreators.failure())
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const { course, loading, error } = state

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator animating={true} />
            </View>
        )
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text>Failed to load posts!</Text>
            </View>
        )
    }

    return (
        <>
            <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
                <View>
                    <ActivityIndicator />
                </View>
                <Button title="Show modal" onPress={toggleModal} />
                <Modal style={{flex:1,alignItems:"center",}}
                       isVisible={isModalVisible}
                       onSwipeComplete={() => setModalVisible(false)}
                       swipeDirection="left">
                    <View style={styles.scrollView}>
                        <LoadingScreen />
                        <Button title="Hide modal" onPress={toggleModal} />
                    </View>
                </Modal>
            </View>
        </>
    );
};

export default MyComponent;

export const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    scrollView: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});