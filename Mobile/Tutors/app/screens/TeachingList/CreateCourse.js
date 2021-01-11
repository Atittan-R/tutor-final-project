import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView, Text, View, ScrollView, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { ButtonNoStyle } from "../../components/buttons/ButtonNoStyle";
import Colors from "../../config/colors";
import { Clock } from "./Clock";
import { ModalDate } from "./ModalDate";
import { TermCourse } from "./TermCourse";
import { TextInputButton } from "./TextInputButton";
import { TextInputPrice } from "./TextInputPrice";

export const CreateCourse = (props) => {
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [show, setShow] = useState(false);
  const [term, setTerm] = useState();
  const [valueText, setValueText] = useState();
  const [price, setPrice] = useState();
  const [days, setDays] = useState([
    "Sun ",
    "Mon ",
    "Tue ",
    "Wed ",
    "Thu ",
    "Fri ",
    "Sat ",
    "Everyday",
  ]);
  const [everyday, setEveryday] = useState(false);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);

  const [allValue, setAllValue] = props.allValue;

  var count = 0;
  const createCourse = () => {
    const arrData = {
      id: "",
      course: "",
      price: "",
      date: "",
      timeStart: "",
      timeEnd: "",
      duration: "",
    };
    arrData.id = count + 1; //uncomplete
    arrData.course = valueText;
    arrData.price = price;
    arrData.date = days;
    arrData.timeStart = dateStart.getHours() + ":" + dateStart.getMinutes();
    arrData.timeEnd = dateEnd.getHours() + ":" + dateEnd.getMinutes();
    arrData.duration = "term";
    setAllValue([...allValue, arrData]);
  };

  return (
    <View style={styles.contrainer}>
      <ScrollView style={styles.Global}>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 20,
            color: colors.second,
          }}
        >
          Create my course
        </Text>
        <TextInputButton text={[valueText, setValueText]} label={"Course"} />
        <TextInputPrice price={[price, setPrice]} label={"Price"} />
        <ModalDate
          day={[days, setDays]}
          everyday={[everyday, setEveryday]}
          sunday={[sunday, setSunday]}
          monday={[monday, setMonday]}
          tuesday={[tuesday, setTuesday]}
          wednesday={[wednesday, setWednesday]}
          thursday={[thursday, setThursday]}
          friday={[friday, setFriday]}
          saturday={[saturday, setSaturday]}
        />
        <Clock
          label={"Time Start"}
          time={[dateStart, setDateStart]}
          show={[show, setShow]}
        />
        <Clock
          label={"Time End"}
          time={[dateEnd, setDateEnd]}
          show={[show, setShow]}
        />
        <TermCourse term={[term, setTerm]} />

        <View style={styles.inputItem2}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => createCourse()}
          >
            <Text style={{ alignSelf: "center", color: colors.second }}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  inputItem2: {
    margin: 5,
    alignItems: "stretch",
  },
  Global: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
  },
  inputItem: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  textInput: {
    backgroundColor: colors.background,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingVertical: 10,
    elevation: 2,
  },
});
