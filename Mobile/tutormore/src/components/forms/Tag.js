import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, RefreshControl } from "react-native";
import Tags from "react-native-tags";
import Colors from "../../configs/Colors";

export default function Tag(props) {
  const { onChangeTags,value } = props;
  const [claerTag,setClaerTag] =props.claerTag
  const [mytags, setTags]=value

//  console.log('=================claerTag===================');
//  console.log(claerTag);
//  console.log((Object.values(mytags)));
//  console.log('====================================');
// useEffect(() => {
//  setTags(tags)
  

// })
  return (
    <View style={styles.inputItem}>
      
      <Text style={{ flex: 0.35, color: Colors.secondary }} >Tags</Text>
      <View style={styles.textDate}>
        <Tags
          initialText=""
          textInputProps={{
            placeholder: "Enter your tags"
          }}
          initialTags={[]}
          onChangeTags={tags =>setTags(tags)}
          containerStyle={{ justifyContent: "center" }}
          inputStyle={{ backgroundColor: "white" }}
          
        />
        
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  inputItem: {
    margin: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    flex: 1,
  },
  textDate: {
    backgroundColor: Colors.background,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
    justifyContent: "space-between",
    color: Colors.secondary
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: Colors.gray
  }
});
