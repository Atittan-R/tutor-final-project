import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import { actionCreators, initialState, reducer } from './CourseReducer'
import API from "../../../services/API";

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
            <FlatList
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                style={styles.container}
                keyExtractor={(course) => course.id}
                data={course}
                renderItem={({ item: { id, name, amount }, index }) => (
                    <View key={id} style={styles.post}>
                        <Text style={styles.title}>
                            {index}. {name}
                        </Text>
                        <Text style={styles.body}>{amount}</Text>
                    </View>
                )}
            />
        </>
    );
};

export default MyComponent;

export const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});