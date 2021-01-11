import React, { useEffect, useState } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import {
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";
import Colors from "../../config/colors";
import CheckBox from "@react-native-community/checkbox";
import { Pressable } from "react-native";

export const ModalDate = (props) => {
  //set checkbox
  const [monday, setMonday] = props.monday;
  const [tuesday, setTuesday] = props.tuesday;
  const [wednesday, setWednesday] = props.wednesday;
  const [thursday, setThursday] = props.thursday;
  const [friday, setFriday] = props.friday;
  const [saturday, setSaturday] = props.saturday;
  const [sunday, setSunday] = props.sunday;
  const [everyday, setEveryday] = props.everyday;
  const [days, setDays] = props.day;

  const [modalVisible, setModalVisible] = useState(false);

  const selectDate = () => {
    if (
      sunday &&
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      friday &&
      saturday == true
    ) {
      setEveryday(true);
      setModalVisible(!modalVisible);
    } else {
      setEveryday(false);
      setModalVisible(!modalVisible);
    }
  };
  useEffect(() => {
    if (everyday == true) {
      setDays(["", "", "", "", "", "", ""]);
    } else {
      setDays(["Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat "]);
    }
  }, [everyday]);
  return (
    <View style={styles.inputItem}>
      <Text style={{ flex: 0.35 }}>Date</Text>

      <View style={styles.textDate}>
        <View style={styles.wrapText}>
          <Text>{everyday ? "Everyday" : null}</Text>
          <Text>{sunday ? days[0] : null}</Text>
          <Text>{monday ? days[1] : null}</Text>
          <Text>{tuesday ? days[2] : null}</Text>
          <Text>{wednesday ? days[3] : null}</Text>
          <Text>{thursday ? days[4] : null}</Text>
          <Text>{friday ? days[5] : null}</Text>
          <Text>{saturday ? days[6] : null}</Text>
        </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  paddingVertical: 10,
                  borderBottomColor: colors.second,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Select Date</Text>
              </View>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? colors.primary : colors.white,
                  },
                  styles.pressStyle,
                ]}
                onPress={() => setSunday(!sunday)}
              >
                <View style={styles.alignCheckBox}>
                  <Text>Sunday</Text>
                  <CheckBox
                    value={sunday}
                    onValueChange={() => setSunday(!sunday)}
                    style={styles.checkbox}
                  />
                </View>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? colors.primary : colors.white,
                  },
                  styles.pressStyle,
                ]}
                onPress={() => setMonday(!monday)}
              >
                <View style={styles.alignCheckBox}>
                  <Text>Monday</Text>
                  <CheckBox
                    value={monday}
                    onValueChange={() => setMonday(!monday)}
                    style={styles.checkbox}
                  />
                </View>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? colors.primary : colors.white,
                  },
                  styles.pressStyle,
                ]}
                onPress={() => setTuesday(!tuesday)}
              >
                <View style={styles.alignCheckBox}>
                  <Text>Tuesday</Text>
                  <CheckBox
                    value={tuesday}
                    onValueChange={() => setTuesday(!tuesday)}
                    style={styles.checkbox}
                  />
                </View>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? colors.primary : colors.white,
                  },
                  styles.pressStyle,
                ]}
                onPress={() => setWednesday(!wednesday)}
              >
                <View style={styles.alignCheckBox}>
                  <Text>Wednesday</Text>
                  <CheckBox
                    value={wednesday}
                    onValueChange={() => setWednesday(!wednesday)}
                    style={styles.checkbox}
                  />
                </View>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? colors.primary : colors.white,
                  },
                  styles.pressStyle,
                ]}
                onPress={() => setThursday(!thursday)}
              >
                <View style={styles.alignCheckBox}>
                  <Text>Thursday</Text>
                  <CheckBox
                    value={thursday}
                    onValueChange={() => setThursday(!thursday)}
                    style={styles.checkbox}
                  />
                </View>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? colors.primary : colors.white,
                  },
                  styles.pressStyle,
                ]}
                onPress={() => setFriday(!friday)}
              >
                <View style={styles.alignCheckBox}>
                  <Text>Friday</Text>
                  <CheckBox
                    value={friday}
                    onValueChange={() => setFriday(!friday)}
                    style={styles.checkbox}
                  />
                </View>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? colors.primary : colors.white,
                  },
                  styles.pressStyle,
                ]}
                onPress={() => setSaturday(!saturday)}
              >
                <View style={styles.alignCheckBox}>
                  <Text>Saturday</Text>
                  <CheckBox
                    value={saturday}
                    onValueChange={() => setSaturday(!saturday)}
                    style={styles.checkbox}
                  />
                </View>
              </Pressable>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: 20,
                }}
              >
                <Pressable
                  style={styles.closeButton}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable style={styles.saveButton} onPress={selectDate}>
                  <Text style={styles.textStyle}>Save</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={{ justifyContent: "flex-end" }}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Icon name={"calendar"} type={"feather"} color={colors.second} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  inputItem: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginHorizontal: 20,
  },
  modalView: {
    margin: 0,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    alignItems: "stretch",
    elevation: 2,
  },
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    elevation: 2,
  },
  closeButton: {
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    elevation: 2,
  },
  textStyle: {
    color: colors.second,
    textAlign: "center",
  },
  wrapText: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  pressStyle: {
    paddingVertical: 10,
    borderBottomColor: colors.second,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  groupCheckBox: {
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  alignCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#fff",
  },
  textDate: {
    backgroundColor: colors.background,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
    paddingVertical: 13,
    justifyContent: "space-between",
  },
});
