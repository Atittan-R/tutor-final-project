import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList
} from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from 'react-native-elements'
import { colors } from "../../config/colors";
import { useNavigation } from "@react-navigation/native";
import { SwipeablePanel } from 'rn-swipeable-panel';
import { CreateCourse } from "./CreateCourse";

const TeachingList = (props) => {

  const [allValue, setAllValue] = useState([
    {
      course: "database",
      price: 400,
      date: "monday",
      duration: "undefined",
      timeEnd: "23:0",
      timeStart: "23:0",
    },
    {
      course: "compro",
      price: 400,
      date: "monday",
      duration: "undefined",
      timeEnd: "23:0",
      timeStart: "23:0",
    },
    {
      course: "compro2",
      price: 400,
      date: "monday",
      duration: "undefined",
      timeEnd: "23:0",
      timeStart: "23:0",
    },
  ]);

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => setIsPanelActive(false),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  useEffect(() => {
    console.log('====================================>');
    console.log(allValue);
    console.log('====================================>');
    Item
  }, [allValue])

  return (
    <>
      <ScrollView style={{ backgroundColor: colors.bg }}>
        <SafeAreaView style={styles.contrainer}>
          <View style={styles.coverArea}>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", }}
              onPress={() => setIsPanelActive(true)}
            >
              <Icon name={'plus-circle'} type={'feather'} color={colors.second} style={{ marginRight: 10 }} />
              <Text style={styles.textNormal}>Create My Course</Text>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 5 }}></View>

          <View style={styles.contrainer}>
            <FlatList
              data={allValue}
              renderItem={({ item }) =>
                <View style={{ paddingBottom: 10 }}>
                  <View style={styles.coverArea}>
                    <Text style={styles.textTitle}>{item.course}</Text>
                    <View style={styles.viewItem}>
                      <Text>Date</Text>
                      <Text>{item.date}</Text>
                    </View>
                    <View style={styles.viewItem}>
                      <Text>Time</Text>
                      <Text>{item.timeStart} - {item.timeEnd}</Text>
                    </View>
                    <View style={styles.viewItem}>
                      <Text>Price</Text>
                      <Text>{item.price}</Text>
                    </View>
                    <View style={styles.viewButton}>
                      <TouchableOpacity
                        style={styles.buttonEdit}>
                        <Text> Edit </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.buttonDelete}>
                        <Text>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              }
              keyExtractor={(item) => item.course}
            // extraData={selectedId}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <CreateCourse allValue={[allValue, setAllValue]} />
      </SwipeablePanel>
    </>
  );
};

export default TeachingList;
