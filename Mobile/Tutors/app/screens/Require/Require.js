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
  Picker

} from "react-native";
import { styles } from "./styles";
import CheckBox from "@react-native-community/checkbox";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { ButtonNoStyle } from "../../components/buttons/ButtonNoStyle";
import DateTimePicker from '@react-native-community/datetimepicker';




const Require = (props) => {
  const { textValue } = props;

  const [isSelectedMonday, setSelectionMonday] = useState(false);
  const [isSelectedTuesday, setSelectionTuesday] = useState(false);
  const [isSelectedWednesday, setSelectionWednesday] = useState(false);
  const [isSelectedThursday, setSelectionThursday] = useState(false);
  const [isSelectedFriday, setSelectionFriday] = useState(false);
  const [isSelectedSaturday, setSelectionSaturday] = useState(false);
  const [isSelectedSunday, setSelectionSunday] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showTimepickerStart = () => {
    setShow(true);
  };

  const [dateEnd, setDateEnd] = useState(new Date());
  const [showEnd, setShowEnd] = useState(false);

  const onChangeEnd = (event, selectedDateEnd) => {
    const currentDateEnd = selectedDateEnd || dateEnd;
    setShowEnd(Platform.OS === 'ios');
    setDateEnd(currentDateEnd);
  };
  const showTimepickerEnd = () => {
    setShowEnd(true);
  };

  const [selectedValue, setSelectedValue] = useState("");

  const [isSelectedEveryday, setSelectionEveryday] = useState(false);
  const [isDay1, setDay1] = useState(false);
  const [isDay2, setDay2] = useState(false);

  const checkEveryday = () => {
    const isMonday = isSelectedMonday;
    const isTuesday = isSelectedTuesday;
    const isWednesday = isSelectedWednesday;
    const isThursday = isSelectedThursday;
    const isFriday = isSelectedFriday;
    const isSaturday = isSelectedSaturday;
    const isSunday = isSelectedSunday;
    if (isMonday == true && isTuesday == true && isWednesday == true && isThursday == true && isFriday == true && isSunday == true && isSaturday == true) {
      setSelectionEveryday(true);
      setSelectionMonday(false);
      setSelectionTuesday(false);
      setSelectionWednesday(false);
      setSelectionThursday(false);
      setSelectionFriday(false);
      setSelectionSaturday(false);
      setSelectionSunday(false);
    } else if (isMonday == false || isTuesday == false) {
      setSelectionEveryday(false)
      console.log("day1 " + isDay1)
    }
  }
  return (
    <SafeAreaView style={styles.contrainer}>
      <ScrollView style={styles.Global}>
        
        <View style={styles.inputItem}>
          <Text style={{ flex: 0.35 }}>Course</Text>

          <TextInput value={textValue} placeholder={"Enter your course name"} style={styles.textInput} />
        </View>

        <View style={styles.inputItem} >
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
              {/* inside modal */}
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.groupCheckBox}>
                    <Text> Select date</Text>

                    {/* checkbox monday */}
                    <View style={styles.alignCheckBox}>
                      <CheckBox
                        value={isSelectedMonday}
                        onValueChange={setSelectionMonday}
                        style={styles.checkbox}
                      />
                      <Text>Monday</Text>
                    </View>

                    {/* checkbox Tuesday */}
                    <View style={styles.alignCheckBox}>
                      <CheckBox
                        value={isSelectedTuesday}
                        onValueChange={setSelectionTuesday}
                        style={styles.checkbox}
                      />
                      <Text>Tuesday</Text>
                    </View>

                    {/* checkbox wednesday */}
                    <View style={styles.alignCheckBox}>
                      <CheckBox
                        value={isSelectedWednesday}
                        onValueChange={setSelectionWednesday}
                        style={styles.checkbox}
                      />
                      <Text>Wednesday</Text>
                    </View>

                    {/* checkbox Thursday */}
                    <View style={styles.alignCheckBox}>
                      <CheckBox
                        value={isSelectedThursday}
                        onValueChange={setSelectionThursday}
                        style={styles.checkbox}
                      />
                      <Text>Thursday</Text>
                    </View>

                    {/* checkbox Friday */}
                    <View style={styles.alignCheckBox}>
                      <CheckBox
                        value={isSelectedFriday}
                        onValueChange={setSelectionFriday}
                        style={styles.checkbox}
                      />
                      <Text>Friday</Text>
                    </View>

                    {/* checkbox Saturday */}
                    <View style={styles.alignCheckBox}>
                      <CheckBox
                        value={isSelectedSaturday}
                        onValueChange={setSelectionSaturday}
                        style={styles.checkbox}
                      />
                      <Text>Saturday</Text>
                    </View>

                    {/* checkbox Sunday */}
                    <View style={styles.alignCheckBox}>
                      <CheckBox
                        value={isSelectedSunday}
                        onValueChange={setSelectionSunday}
                        style={styles.checkbox}
                      />
                      <Text>Sunday</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <TouchableHighlight
                      onPress={checkEveryday}
                      style={styles.closeButton}
                    >
                      <Text style={styles.textStyle}>Save</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      style={styles.closeButton}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        checkEveryday;
                      }}
                    >
                      <Text style={styles.textStyle}>Close</Text>
                    </TouchableHighlight>
                  </View>

                </View>
              </View>
            </Modal>

            <TouchableHighlight
              style={{ position: "absolute", right: 20, top: 12 }}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Image style={styles.imageStyle} source={require("../../assets/calendar.png")} />
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.inputItem}>
          <Text style={{ flex: 0.35 }}> Time Start </Text>
          <View style={styles.textDate} >
            <Text>{date.getHours()}:{date.getMinutes()}</Text>
            <TouchableOpacity onPress={showTimepickerStart}>
              <Image style={styles.imageStyle} source={require("../../assets/clock.png")} />
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
          <View style={styles.textDate} >
            <Text>{dateEnd.getHours()}:{dateEnd.getMinutes()}</Text>
            <TouchableOpacity onPress={showTimepickerEnd} style={{alignSelf:"flex-end"}}>
              <Image style={styles.imageStyle} source={require("../../assets/clock.png")} />
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
          <View style={styles.textDate} >
            <Picker
              selectedValue={selectedValue}
              style={styles.drop}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="14 Days" value="1" />
              <Picker.Item label="1 Month" value="2" />
              <Picker.Item label="3 Month" value="3" />
              <Picker.Item label="6 Month" value="4" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputItem2}>
          <ButtonNoStyle label={"OK"} screenName={"Screen1"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Require;
