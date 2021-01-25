import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, RefreshControl } from "react-native";
import Tags from "react-native-tags";
import Colors from "../../configs/Colors";

export default function Tag(props) {
  const { onChangeTags, value } = props;
  const [claerTag, setClaerTag] = props.claerTag
  const [mytags, setTags] = value

  //  console.log('=================claerTag===================');
  //  console.log(claerTag);
  //  console.log((Object.values(mytags)));
  //  console.log('====================================');
  // useEffect(() => {
  //  setTags(tags)


  // })
  return (
    <View style={styles.inputItem}>
      <View style={styles.textDate}>
        <Tags
          initialText=""
          textInputProps={{
            placeholder: "Tags"
          }}
          initialTags={[]}
          onChangeTags={tags => setTags(tags)}
          containerStyle={{ justifyContent: "center" }}
          inputStyle={{ backgroundColor: "white" }}

        />

      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  inputItem: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },
  textDate: {
    backgroundColor: Colors.background,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-between",
    color: Colors.secondary
  },
});
