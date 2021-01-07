import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SwipeablePanel } from "rn-swipeable-panel";
import { styles } from "./styles";
import { CreateRequest } from "./CreateRequest";
export const Require = (props) => {

  const [isPanelActive, setIsPanelActive] = useState(false);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => setIsPanelActive(false),
    // ...or any prop you want
  });

  const [allValue, setAllValue] = useState([]);
  useEffect(() => {
    console.log('============Request=================>');
    console.log(allValue);
    console.log('====================================>');
  }, [allValue])
  return (
    <SafeAreaView style={styles.contrainer}>
      <View style={styles.coverArea}>
        <TouchableOpacity
          onPress={() => setIsPanelActive(true)}>
          <Text>Request course</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 5 }}></View>
      <View style={styles.contrainer}>
        <FlatList
          data={allValue}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View style={{ paddingBottom: 10 }}>
              <View style={styles.coverArea}>
                <View style={styles.viewTitle}>
                  <Image style={styles.profile} source={require("../../assets/profile.jpg")} />
                  <Text style={{ fontWeight: "bold" }}>  Pixels Dragneel</Text>
                </View>
                <View style={styles.viewItem}>
                  <Text>Course</Text>
                  <Text>{item.course}</Text>
                </View>
                <View style={styles.viewItem}>
                  <Text>Date</Text>
                  <Text>{item.date}</Text>
                </View>
                <View style={styles.viewItem}>
                  <Text>Time</Text>
                  <Text>{item.timeStart} - {item.timeEnd}</Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonTake}>
                  <Text>Take</Text>
                </TouchableOpacity>
              </View>
            </View>

          } />
      </View>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <CreateRequest allValue={[allValue, setAllValue]} />
      </SwipeablePanel>
    </SafeAreaView>
  );
};

export default Require;
