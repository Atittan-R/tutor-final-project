import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Tags from "react-native-tags";
import Colors from "../../configs/Colors";

export default function Tag() {
  const [selectedValue, setSelectedValue] = useState("");
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
          onChangeTags={tags => console.log(tags)}
          onTagPress={(index, tagLabel, event, deleted) =>
            console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
          }
          containerStyle={{ justifyContent: "center" }}
          inputStyle={{ backgroundColor: "white" }}
          renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
            <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
              <Text style={styles.text}>{tag}</Text>
            </TouchableOpacity>
          )}
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
    paddingVertical: 13,
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
