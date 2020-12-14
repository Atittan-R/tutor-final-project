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

  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  return (
    <SafeAreaView style={styles.contrainer}>
      <ScrollView>
        <View style={styles.inputItem}>
          <Text style={{ flex: 0.5 }}>Course Name</Text>
          <View style={{ flex: 1 }}>
            <PrimaryInput />
          </View>
        </View>

        <View style={styles.inputItem}>
          <Text style={{ flex: 0.5 }}>Date</Text>
          <View style={styles.centeredView}>
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
                    <View style={styles.inputItem}>
                      <CheckBox
                        value={isSelectedMonday}
                        onValueChange={setSelectionMonday}
                        style={styles.checkbox}
                      />
                      <Text>Monday</Text>
                    </View>

                    {/* checkbox Tuesday */}
                    <View style={styles.inputItem}>
                      <CheckBox
                        value={isSelectedTuesday}
                        onValueChange={setSelectionTuesday}
                        style={styles.checkbox}
                      />
                      <Text>Tuesday</Text>
                    </View>

                    {/* checkbox wednesday */}
                    <View style={styles.inputItem}>
                      <CheckBox
                        value={isSelectedWednesday}
                        onValueChange={setSelectionWednesday}
                        style={styles.checkbox}
                      />
                      <Text>Wednesday</Text>
                    </View>

                    {/* checkbox Thursday */}
                    <View style={styles.inputItem}>
                      <CheckBox
                        value={isSelectedThursday}
                        onValueChange={setSelectionThursday}
                        style={styles.checkbox}
                      />
                      <Text>Thursday</Text>
                    </View>

                    {/* checkbox Friday */}
                    <View style={styles.inputItem}>
                      <CheckBox
                        value={isSelectedFriday}
                        onValueChange={setSelectionFriday}
                        style={styles.checkbox}
                      />
                      <Text>Friday</Text>
                    </View>

                    {/* checkbox Saturday */}
                    <View style={styles.inputItem}>
                      <CheckBox
                        value={isSelectedSaturday}
                        onValueChange={setSelectionSaturday}
                        style={styles.checkbox}
                      />
                      <Text>Saturday</Text>
                    </View>

                    {/* checkbox Sunday */}
                    <View style={styles.inputItem}>
                      <CheckBox
                        value={isSelectedSunday}
                        onValueChange={setSelectionSunday}
                        style={styles.checkbox}
                      />
                      <Text>Sunday</Text>
                    </View>

                    {/* checkbox everyday */}
                    <View style={styles.inputItem}>
                      <CheckBox
                        value={isSelectedEveryday}
                        onValueChange={setSelectionEveryday}
                        style={styles.checkbox}
                      />
                      <Text>Everyday</Text>
                    </View>
                  </View>

                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#BAE367" }}
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
          <Text>{isSelectedMonday ? "Monday " : ""}</Text>
          <Text>{isSelectedTuesday ? "Tuesday " : ""}</Text>
          <Text>{isSelectedWednesday ? "Wednesday " : ""}</Text>
          <Text>{isSelectedThursday ? "Thursday " : ""}</Text>
          <Text>{isSelectedFriday ? "Friday " : ""}</Text>
          <Text>{isSelectedSaturday ? "Saturday " : ""}</Text>
          <Text>{isSelectedSunday ? "Sunday " : ""}</Text>
          <Text>{isSelectedEveryday ? "Everyday " : ""}</Text>
        </View>

        <View style={styles.inputItem}>
          <Text >
            Time Start: {selectedHours}:{selectedMinutes}
          </Text>
        </View>
        <TimePicker 
            selectedHours={selectedHours}
            selectedMinutes={selectedMinutes}
            onChange={(hours, minutes) => {
              setSelectedHours(hours);
              setSelectedMinutes(minutes);
            }}
          />
        <View style={styles.loginBtnWrapper}>
          <PrimaryButton label={"OK"} screenName={"Screen1"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Require;
