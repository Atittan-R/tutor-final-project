import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import MajorCard from "../../components/cards/MajorCard/MajorCard";
import { styles } from "./styles";
// 
const Major = () => {
  useEffect(() => {
    console.log(major)
  })
  const [major,setmajor]=useState(undefined);
  return (
    <>
      <ScrollView style={styles.bg}>
        <View style={styles.container}>
          <MajorCard majorName={"IT"}/>
          <MajorCard majorName={"MT"} />
          <MajorCard majorName={"PUB"} />
          <MajorCard majorName={"ENG"} />
          <MajorCard majorName={"SCI"} />
          <MajorCard majorName={"SPC"} />
          <MajorCard majorName={"SPC"} />
        </View>
      </ScrollView>
      <View style={styles.bg}>
        <View style={styles.btnWrap}>
          <PrimaryButton label={"Next"} screenName={"Screen1"} />
        </View>
      </View>
    </>
  );
};

export default Major;
