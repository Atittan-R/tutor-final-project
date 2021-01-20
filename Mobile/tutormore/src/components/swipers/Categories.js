import {ActivityIndicator, Text, View} from "react-native";
import React from "react";
import PanelCategory from "./PanelCategory";
import img from "../../assets/images/categories/management.png"


const cate = [
    //     {
    // id:"0",
    //     name:"General Education",
    //     path:"../../assets/images/categories/general.png"
    // },
    {
        id:"2",
        name: "Management\nTechnology",
        image: require('../../assets/images/categories/management.png')
    }, {
        id:"3",
        name: "Engineering\n",
        image: require('../../assets/images/categories/engineering.png')
    }, {
        id:"4",
        name: "Digital\nTechnology",
        image: require('../../assets/images/categories/digital.png')
    }, {
        id:"5",
        name: "Science\n",
        image: require('../../assets/images/categories/management.png')
    }, {
        id:"6",
        name: "Agricultural\nTechnology",
        image: require('../../assets/images/categories/agricultural.png')
    }, {
        id:"7",
        name: "Foreign\nLanguages",
        image: require('../../assets/images/categories/foreign_language.png')
    }, {
        id:"8",
        name: "Medicine\n",
        image: require('../../assets/images/categories/doctor.png')
    }, {
        id:"9",
        name: "Nurse\n",
        image: require('../../assets/images/categories/nurse.png')
    }, {
        id:"10",
        name: "Dentistry\n",
        image: require('../../assets/images/categories/density.png')
    }, {
        id:"11",
        name: "Public\nHealth",
        image: require('../../assets/images/categories/heart.png')
    }];

export default function Categories() {
    return (
        <PanelCategory category={cate}/>
    );
}
