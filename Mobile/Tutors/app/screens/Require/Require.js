import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Modal,
} from "react-native";
import { styles } from "./styles";
import { PrimaryInput } from "../../components/forms/PrimaryInput/PrimaryInput";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
//import { CheckBox } from "react-native-elements";
import CheckBox from "@react-native-community/checkbox";
import TimePicker from "react-native-simple-time-picker";

const Require = () => {
  const [isSelectedMonday, setSelectionMonday] = useState(false);
  const [isSelectedTuesday, setSelectionTuesday] = useState(false);
  const [isSelectedWednesday, setSelectionWednesday] = useState(false);
  const [isSelectedThursday, setSelectionThursday] = useState(false);
  const [isSelectedFriday, setSelectionFriday] = useState(false);
  const [isSelectedSaturday, setSelectionSaturday] = useState(false);
  const [isSelectedSunday, setSelectionSunday] = useState(false);
  const [isSelectedEveryday, setSelectionEveryday] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedHoursStart, setSelectedHoursStart] = useState(0);
  const [selectedMinutesStart, setSelectedMinutesStart] = useState(0);

  const [selectedHoursEnd, setSelectedHoursEnd] = useState(0);
  const [selectedMinutesEnd, setSelectedMinutesEnd] = useState(0);
  return (
    <SafeAreaView style={styles.contrainer}>
      <ScrollView>
        <View style={styles.inputItem}>
          <Text style={{ flex: 1 }}>Course</Text>
          <PrimaryInput placeHolder={"Enter your course name"} />
        </View>

        <View style={styles.inputItem}>
          <Text style={{ flex: 0.5 }}>Date</Text>
          <View style={{ flex: 0.75 }}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
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

                    {/* checkbox everyday */}
                    <View style={styles.alignCheckBox}>
                      <CheckBox
                        value={isSelectedEveryday}
                        onValueChange={setSelectionEveryday}
                        style={styles.checkbox}
                      />
                      <Text>Everyday</Text>
                    </View>
                  </View>

                  <TouchableHighlight
                    style={{
                      ...styles.closeButton,
                      backgroundColor: "#BAE367",
                    }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={styles.textStyle}>Select date</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.inputItem}>
          <Text>{isSelectedMonday ? "Monday, " : ""}</Text>
          <Text>{isSelectedTuesday ? "Tuesday, " : ""}</Text>
          <Text>{isSelectedWednesday ? "Wednesday, " : ""}</Text>
          <Text>{isSelectedThursday ? "Thursday, " : ""}</Text>
          <Text>{isSelectedFriday ? "Friday, " : ""}</Text>
          <Text>{isSelectedSaturday ? "Saturday, " : ""}</Text>
          <Text>{isSelectedSunday ? "Sunday, " : ""}</Text>
          <Text>{isSelectedEveryday ? "Everyday " : ""}</Text>
        </View>

        {/* Time Start */}
        <View style={styles.inputItem}>
          <Text style={{ flex: 1 }}>Time Start</Text>
          <View style={styles.timeButton}>
            <TimePicker
              selectedHoursStart={selectedHoursStart}
              selectedMinutesStart={selectedMinutesStart}
              onChange={(hoursStart, minutesStart) => {
                setSelectedHoursStart(hoursStart);
                setSelectedMinutesStart(minutesStart);
              }}
            />
          </View>
        </View>
        <View style={styles.inputItem}>
          <Text style={styles.textTime}>
            {selectedHoursStart}:{selectedMinutesStart}
          </Text>
        </View>

        {/* Time End */}
        <View style={styles.inputItem}>
          <Text style={{ flex: 1 }}>Time End</Text>
          <View style={styles.timeButton}>
            <TimePicker
              selectedHoursEnd={selectedHoursEnd}
              selectedMinutesEnd={selectedMinutesEnd}
              onChange={(hoursEnd, minutesEnd) => {
                setSelectedHoursEnd(hoursEnd);
                setSelectedMinutesEnd(minutesEnd);
              }}
            />
          </View>
        </View>
        <View style={styles.inputItem}>
          <Text style={styles.textTime}>
            {selectedHoursEnd}:{selectedMinutesEnd}
          </Text>
        </View>

        <View style={styles.loginBtnWrapper}>
          <PrimaryButton label={"OK"} screenName={"Screen1"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Require;
