import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView
} from "react-native";
import { styles } from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { ButtonNoStyle } from "../../components/buttons/ButtonNoStyle";
import { Clock } from "./Clock";
import { ModalDate } from "./ModalDate";
import { TermCourse } from "./TermCourse";


const Require = (props) => {
  const { textValue } = props;

  return (
    <View style={styles.contrainer}>
      <ScrollView style={styles.Global}>
        <View style={styles.inputItem}>
          <Text style={{ flex: 0.35 }}>Course</Text>
          <TextInput value={textValue} placeholder={"Enter your course name"} style={styles.textInput} />
        </View>
        <ModalDate />
        <Clock label={"Time Start"} />
        <Clock label={"Time End"} />
        <TermCourse />

        <View style={styles.inputItem2}>
          <ButtonNoStyle label={"OK"} screenName={"Notification"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Require;
