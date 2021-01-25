import { ActivityIndicator, Text, View } from "react-native";
import React from "react";
import PanelCategory from "./PanelCategory";
import img from "../../assets/images/categories/management.png"


const cate = [
    {
        id: "1",
        name: "General Education",
        image: require('../../assets/course/geography.png')
    },
    {
        id: "2",
        name: "Management Technology",
        image: require('../../assets/course/analytics.png')
    }, {
        id: "3",
        name: "Engineering",
        image: require('../../assets/course/electrician.png')
    }, {
        id: "4",
        name: "Digital Technology",
        image: require('../../assets/course/multimedia.png')
    }, {
        id: "5",
        name: "Science",
        image: require('../../assets/course/test-tube.png')
    }, {
        id: "6",
        name: "Agricultural Technology",
        image: require('../../assets/course/growth.png')
    }, {
        id: "7",
        name: "Foreign Languages",
        image: require('../../assets/course/directory.png')
    }, {
        id: "8",
        name: "Medicine",
        image: require('../../assets/course/stethoscope.png')
    }, {
        id: "9",
        name: "Nurse",
        image: require('../../assets/course/nurse.png')
    }, {
        id: "10",
        name: "Dentistry",
        image: require('../../assets/course/tooth.png')
    }, {
        id: "11",
        name: "Public Health",
        image: require('../../assets/course/heart-rate-monitor.png')
    }];

export default function Categories() {
    return (
        <PanelCategory category={cate} />
    );
}
