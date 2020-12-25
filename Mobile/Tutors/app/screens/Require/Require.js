import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Modal,
  Image,
  Platform,
  Picker,
  StyleSheet,
} from "react-native";
import { styles } from "./styles";
import CheckBox from "@react-native-community/checkbox";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { ButtonNoStyle } from "../../components/buttons/ButtonNoStyle";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Icon } from "react-native-elements";
import { colors } from "../../config/colors";
import { Pressable } from "react-native";

const Require = (props) => {
  const { textValue } = props;
  //set time start
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showTimepickerStart = () => {
    setShow(true);
  };

  //set time end
  const [dateEnd, setDateEnd] = useState(new Date());
  const [showEnd, setShowEnd] = useState(false);
  const onChangeEnd = (event, selectedDateEnd) => {
    const currentDateEnd = selectedDateEnd || dateEnd;
    setShowEnd(Platform.OS === "ios");
    setDateEnd(currentDateEnd);
  };
  const showTimepickerEnd = () => {
    setShowEnd(true);
  };

  const [selectedValue, setSelectedValue] = useState("");

  //set checkbox
  const [isSelectedMonday, setSelectionMonday] = useState(false);
  const [isSelectedTuesday, setSelectionTuesday] = useState(false);
  const [isSelectedWednesday, setSelectionWednesday] = useState(false);
  const [isSelectedThursday, setSelectionThursday] = useState(false);
  const [isSelectedFriday, setSelectionFriday] = useState(false);
  const [isSelectedSaturday, setSelectionSaturday] = useState(false);
  const [isSelectedSunday, setSelectionSunday] = useState(false);
  const [isSelectedEveryday, setSelectionEveryday] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const selectEveryday = () => {
    if (isSelectedEveryday === false) {
      //check false
      setSelectionEveryday(!isSelectedEveryday); //change to ture
      setModalVisible(!modalVisible);
    } else {
      //check true
      setSelectionEveryday(!isSelectedEveryday); //change to false
      setModalVisible(!modalVisible);
    }
  };

  const selectDate = () => {
    if (
      isSelectedSunday == true &&
      isSelectedMonday == true &&
      isSelectedTuesday == true
    ) {
      setSelectionEveryday(true);
      setSelectionSunday(false);
      setSelectionMonday(false);
      setSelectionTuesday(false);
      setModalVisible(!modalVisible);
    } else if (isSelectedSunday == true) {
      setSelectionSunday(true);
      setSelectionEveryday(false);
      setModalVisible(!modalVisible);
    } else if (isSelectedMonday == true) {
      setSelectionMonday(true);
      setSelectionEveryday(false);
      setModalVisible(!modalVisible);
    } else if (isSelectedTuesday == true) {
      setSelectionTuesday(true);
      setSelectionEveryday(false);
      setModalVisible(!modalVisible);
    } else {
      setModalVisible(!modalVisible);
    }
  };

  // const checkEveryday = () => {
  //   const isMonday = isSelectedMonday;
  //   const isTuesday = isSelectedTuesday;
  //   const isWednesday = isSelectedWednesday;
  //   const isThursday = isSelectedThursday;
  //   const isFriday = isSelectedFriday;
  //   const isSaturday = isSelectedSaturday;
  //   const isSunday = isSelectedSunday;
  //   if (isMonday == true && isTuesday == true && isWednesday == true && isThursday == true && isFriday == true && isSunday == true && isSaturday == true) {
  //     setSelectionEveryday(true);
  //     // setSelectionMonday(false);
  //     // setSelectionTuesday(false);
  //     // setSelectionWednesday(false);
  //     // setSelectionThursday(false);
  //     // setSelectionFriday(false);
  //     // setSelectionSaturday(false);
  //     // setSelectionSunday(false);
  //   } else if (isMonday == false || isTuesday == false) {
  //     setSelectionEveryday(false)
  //     console.log("day1 " + isDay1)
  //   }
  //}
  return (
    <SafeAreaView style={styles.contrainer}>
      <ScrollView style={styles.Global}>
        <View style={styles.inputItem}>
          <Text style={{ flex: 0.35 }}>Course</Text>

          <TextInput
            value={textValue}
            placeholder={"Enter your course name"}
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputItem}>
          <Text style={{ flex: 0.35 }}>Date</Text>

          <View style={styles.textDate}>
            <View style={styles.wrapText}>
              <Text>{isSelectedEveryday ? "Everyday" : null}</Text>
              <Text>{isSelectedMonday ? "Mon " : null}</Text>
              <Text>{isSelectedTuesday ? "Tue " : null}</Text>
              <Text>{isSelectedWednesday ? "Wed " : null}</Text>
              <Text>{isSelectedThursday ? "Thu " : null}</Text>
              <Text>{isSelectedFriday ? "Fri " : null}</Text>
              <Text>{isSelectedSaturday ? "Sat " : null}</Text>
              <Text>{isSelectedSunday ? "Sun " : null}</Text>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View
                    style={{
                      paddingVertical: 10,
                      borderBottomColor: colors.secondary,
                      borderBottomWidth: StyleSheet.hairlineWidth,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>Select Date</Text>
                  </View>
                  {/* <Pressable
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed
                          ? colors.primary
                          : colors.white
                      },
                      styles.pressStyle
                    ]}
                    onPress={selectEveryday}>
                    <View style={styles.alignCheckBox}>
                      <Text>Everyday</Text>
                      <CheckBox
                        value={isSelectedEveryday}
                        onValueChange={selectEveryday}
                        style={styles.checkbox}
                      />
                    </View>
                  </Pressable> */}
                  <Pressable
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed
                          ? colors.primary
                          : colors.white,
                      },
                      styles.pressStyle,
                    ]}
                  >
                    <View style={styles.alignCheckBox}>
                      <Text>Sunday</Text>
                      <CheckBox
                        value={isSelectedSunday}
                        onValueChange={setSelectionSunday}
                        style={styles.checkbox}
                      />
                    </View>
                  </Pressable>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed
                          ? colors.primary
                          : colors.white,
                      },
                      styles.pressStyle,
                    ]}
                  >
                    <View style={styles.alignCheckBox}>
                      <Text>Monday</Text>
                      <CheckBox
                        value={isSelectedMonday}
                        onValueChange={setSelectionMonday}
                        style={styles.checkbox}
                      />
                    </View>
                  </Pressable>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed
                          ? colors.primary
                          : colors.white,
                      },
                      styles.pressStyle,
                    ]}
                  >
                    <View style={styles.alignCheckBox}>
                      <Text>Tuesday</Text>
                      <CheckBox
                        value={isSelectedTuesday}
                        onValueChange={setSelectionTuesday}
                        style={styles.checkbox}
                      />
                    </View>
                  </Pressable>

                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <TouchableHighlight
                      style={[
                        styles.closeButton,
                        { margin: 20, paddingHorizontal: 25 },
                      ]}
                      onPress={selectDate}
                    >
                      <Text style={styles.textStyle}>Save</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      style={[styles.closeButton, { margin: 20 }]}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>Cancel</Text>
                    </TouchableHighlight>
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
              <Icon
                name={"calendar"}
                type={"feather"}
                color={colors.secondary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputItem}>
          <Text style={{ flex: 0.35 }}> Time Start </Text>
          <View style={styles.textDate}>
            <Text>
              {date.getHours()}:{date.getMinutes()}
            </Text>
            <TouchableOpacity onPress={showTimepickerStart}>
              <Icon name={"clock"} type={"feather"} color={colors.secondary} />
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                value={date}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>

        <View style={styles.inputItem}>
          <Text style={{ flex: 0.35 }}> Time End </Text>
          <View style={styles.textDate}>
            <Text>
              {dateEnd.getHours()}:{dateEnd.getMinutes()}
            </Text>
            <TouchableOpacity
              onPress={showTimepickerEnd}
              style={{ alignSelf: "flex-end" }}
            >
              <Icon name={"clock"} type={"feather"} color={colors.secondary} />
            </TouchableOpacity>
            {showEnd && (
              <DateTimePicker
                value={dateEnd}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={onChangeEnd}
              />
            )}
          </View>
        </View>

        <View style={styles.inputItem}>
          <Text style={{ flex: 0.35 }}> Duration </Text>
          <View style={styles.textDate}>
            <Picker
              selectedValue={selectedValue}
              style={styles.drop}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="14 Days" value="1" />
              <Picker.Item label="1 Month" value="2" />
              <Picker.Item label="3 Month" value="3" />
              <Picker.Item label="6 Month" value="4" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputItem2}>
          <ButtonNoStyle label={"OK"} screenName={"Notification"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Require;
