import React from "react";
import { ScrollView, Text, View } from "react-native";
import MajorCard from "../../components/cards/MajorCard/MajorCard";
import { styles } from "./styles";

const Major = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MajorCard majorName={"IT"} />
        <MajorCard majorName={"MT"} />
        <MajorCard majorName={"PUB"} />
        <MajorCard majorName={"MT"} />
        <MajorCard majorName={"MT"} />
        <MajorCard majorName={"MT"} />
        <MajorCard majorName={"MT"} />
        <MajorCard majorName={"MT"} />
        <MajorCard majorName={"MT"} />
        <MajorCard majorName={"MT"} />
        <MajorCard majorName={"MT"} />
        <MajorCard majorName={"MT"} />
      </View>
    </ScrollView>
  );
};

export default Major;
