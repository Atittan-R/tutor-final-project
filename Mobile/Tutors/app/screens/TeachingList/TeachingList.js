import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Modal,
  StyleSheet,
} from "react-native";
import { styles } from "./styles";
import {
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import Colors from "../../config/colors";
import { useNavigation } from "@react-navigation/native";
import { SwipeablePanel } from "rn-swipeable-panel";
import { CreateCourse } from "./CreateCourse";

const TeachingList = (props) => {
  const [allValue, setAllValue] = useState([
    // {
    //   id: 1,
    //   course: "database",
    //   price: 400,
    //   date: "monday",
    //   duration: "undefined",
    //   timeEnd: "23:0",
    //   timeStart: "23:0",
    // },
    // {
    //   id: 2,
    //   course: "compro",
    //   price: 400,
    //   date: "tuesday",
    //   duration: "undefined",
    //   timeEnd: "23:0",
    //   timeStart: "23:0",
    // },
    // {
    //   id: 3,
    //   course: "compro2",
    //   price: 400,
    //   date: "wednrsday",
    //   duration: "undefined",
    //   timeEnd: "23:0",
    //   timeStart: "23:0",
    // },
  ]);
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => setIsPanelActive(false),
    // ...or any prop you want
  });

  useEffect(() => {
    console.log("====================================>");
    console.log(allValue);
    console.log("====================================>");
  }, [allValue]);

  const [modalVisible, setModalVisible] = useState(false);
  const [editValue, onChangeText] = useState("");
  return (
    <SafeAreaView style={styles.contrainer}>
      <View style={styles.coverArea}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setIsPanelActive(true)}
        >
          <Icon
            name={"plus-circle"}
            type={"feather"}
            color={colors.second}
            style={{ marginRight: 10 }}
          />
          <Text style={styles.textNormal}>Create My Course</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 5 }}></View>

      <View style={styles.contrainer}>
        <FlatList
          data={allValue}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ paddingBottom: 10 }}>
              <View style={styles.coverArea}>
                <Text style={styles.textTitle}>{item.course}</Text>
                <View style={styles.viewItem}>
                  <Text>Date</Text>
                  <Text>{item.date}</Text>
                </View>
                <View style={styles.viewItem}>
                  <Text>Time</Text>
                  <Text>
                    {item.timeStart} - {item.timeEnd}
                  </Text>
                </View>
                <View style={styles.viewItem}>
                  <Text>Price</Text>
                  <Text>{item.price}</Text>
                </View>
                <View style={styles.viewButton}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    // key={item.id}
                  >
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
                          <Text style={{ fontWeight: "bold" }}>
                            Select Date
                          </Text>
                        </View>
                        <View style={styles.viewItem}>
                          <Text>Date</Text>
                          <Text>{item.date}</Text>
                        </View>
                        <View style={styles.viewItem}>
                          <Text>Time</Text>
                          <Text>
                            {item.timeStart} - {item.timeEnd}
                          </Text>
                        </View>
                        <View style={styles.viewItem}>
                          <Text>Price</Text>
                          <Text>{item.price}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            marginTop: 20,
                          }}
                        >
                          <TouchableHighlight
                            style={styles.closeButton}
                            onPress={() => {
                              setModalVisible(!modalVisible);
                            }}
                          >
                            <Text style={styles.textStyle}>Cancel</Text>
                          </TouchableHighlight>
                          <TouchableHighlight
                            style={styles.saveButton}
                            // onPress={selectDate}
                          >
                            <Text style={styles.textStyle}>Save</Text>
                          </TouchableHighlight>
                        </View>
                      </View>
                    </View>
                  </Modal>
                  <TouchableOpacity
                    style={styles.buttonEdit}
                    key={item.id}
                    onPress={() => {
                      setModalVisible(true);
                    }}
                  >
                    <Text> Edit </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonDelete}
                    onPress={() => {
                      deleteItem;
                    }}
                  >
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <CreateCourse allValue={[allValue, setAllValue]} />
      </SwipeablePanel>
    </SafeAreaView>
  );
};

export default TeachingList;
