import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import { SwipeablePanel } from "rn-swipeable-panel";
import Colors from "../../configs/Colors";
import { Icon, Rating } from "react-native-elements";
import PanelCategory from "../../components/swipers/PanelCategory";

export default function Home({ navigation }) {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    showCloseButton: true,
    closeOnTouchOutside: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  const dataList = [
    {
      id: "0",
      name: "Computer ",
      description: "จะสอนให้น้องๆ นะครับ ทุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน",
      price: 1234,
      tutors: "Pixels",
      rate: 2,
    },
    //   ];
    {
      id: "1",
      name: "Computer Programming",
      description:
        "จะสอนให้น้อไม่ดื้อตั้งใจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน เเละเป็นคนหล่อ สวย ทุกคนเลย",
      price: "250",
      tutors: "Pixels",
      rate: 5,
    },
    {
      id: "2",
      name: "Data Structure",
      description:
        "จะสอนให้น้องๆ นะครับ ทุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafawefawefawefawefawfeweเลย",
      price: "250",
      tutors: "Pixels",
      rate: 3,
    },
    {
      id: "3",
      name: "Computer Programming",
      description:
        "จะสอนให้น้องๆ นะครับ ุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน เเละเป็นคนหล่อ สวย ทุกคนเลย",
      price: "250",
      tutors: "Pixels",
      rate: 4,
    },
  ];

  const dataRecommend = [
    {
      id: "1",
      name: "Computer Programming",
      description:
        "จะสอนให้น้อไม่ดื้อตั้งใจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคน",
      price: "250",
      tutors: "Pixels",
      rate: 5,
    },
    {
      id: "2",
      name: "Data Structure",
      description:
        "จะสอนให้น้องๆ นะครับ ทุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน คนหล่อ สวย ทุกคน",
      price: "250",
      tutors: "Pixels",
      rate: 3,
    },
    {
      id: "3",
      name: "Computer Programming",
      description:
        "จะสอนให้น้องๆ นะครับ ุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน เเละเป็นคนหล่อ สวย ทุกคนเลย",
      price: "250",
      tutors: "Pixels",
      rate: 4,
    },
  ];

  // search bar
  const [filterItem, setFilterItem] = useState(null)
  const searchAction = (text) => {
    setFilterItem(dataList.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
  }
  return (
    <>
      <SafeAreaView style={styles.container} />

      {/*Majors*/}
      <View style={styles.viewItem}>
        <Text style={styles.titleHome}>Tutor More</Text>
        <TextInput
          style={styles.search}
          onChangeText={(text) => searchAction(text)}
          placeholder="Search"
        />
      </View>
      <ScrollView>
        {/*Category*/}
        <View style={styles.bg}>
          <View style={styles.line} />
          <View style={{ marginVertical: 10 }}>
            <View style={[styles.topic, styles.row]}>
              <View style={[styles.column, styles.box]} />
              <Text style={[styles.column, styles.textRec]}>Category</Text>
            </View>
          </View>

          <ScrollView horizontal={true}>
            <TouchableOpacity
              style={{
                padding: 5,
                marginVertical: 2,
                flex: 1,
                alignItems: "center",
              }}
              onPress={() => openPanel()}
            >
              <View
                style={{
                  padding: 15,
                  backgroundColor: Colors.gray,
                  borderRadius: 20,
                }}
              >
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require("../../assets/images/categories/digital.png")}
                />
              </View>
              <Text style={{ marginVertical: 2, textAlign: "center" }}>
                Digital
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                marginVertical: 2,
                flex: 1,
                alignItems: "center",
              }}
              onPress={() => openPanel()}
            >
              <View
                style={{
                  padding: 15,
                  backgroundColor: Colors.gray,
                  borderRadius: 20,
                }}
              >
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require("../../assets/images/categories/doctor.png")}
                />
              </View>
              <Text style={{ marginVertical: 2, textAlign: "center" }}>
                Doctor
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 5,
                marginVertical: 2,
                flex: 1,
                alignItems: "center",
              }}
              onPress={() => openPanel()}
            >
              <View
                style={{
                  padding: 15,
                  backgroundColor: Colors.gray,
                  borderRadius: 20,
                }}
              >
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require("../../assets/images/categories/engineering.png")}
                />
              </View>
              <Text style={{ marginVertical: 2, textAlign: "center" }}>
                Engineering
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                marginVertical: 2,
                flex: 1,
                alignItems: "center",
              }}
              onPress={() => openPanel()}
            >
              <View
                style={{
                  padding: 15,
                  backgroundColor: Colors.gray,
                  borderRadius: 20,
                }}
              >
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require("../../assets/images/categories/more.png")}
                />
              </View>
              <Text style={{ marginVertical: 2, textAlign: "center" }}>
                More..
            </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* recommend */}
        <View style={styles.bg}>
          <View style={styles.line} />
          <View style={{ marginVertical: 10 }}>
            <View style={[styles.topic, styles.row]}>
              <View style={[styles.column, styles.box]} />
              <Text style={[styles.column, styles.textRec]}>Recommend</Text>
            </View>
          </View>

          <FlatList
            horizontal={true}
            data={dataRecommend}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  padding: 5,
                  marginVertical: 2,
                  marginHorizontal: 10,
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: Colors.gray,
                  borderRadius: 20,
                  width: 250,
                  height: 200,
                  flexWrap: "wrap",
                  flexShrink: 1,
                }}
              >
                <View
                  style={{
                    padding: 15,
                  }}
                >
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: "contain",
                      alignSelf: "center",
                    }}
                    source={require("../../assets/images/categories/digital.png")}
                  />
                  <View>
                    <Text style={{ marginVertical: 2, fontWeight: "bold" }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontSize: 12 }}>{item.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.bg}>
          <View style={styles.line} />
          <View style={[styles.topic, styles.row]}>
            <View style={[styles.column, styles.box]} />
            <Text style={[styles.column, styles.textRec]}>All Course</Text>
          </View>

          <FlatList
            data={filterItem ? filterItem : dataList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={styles.card}
                // TODO Set PARAM to CourseDetail
                onPress={() => {
                  navigation.navigate("CourseDetail");
                }}
              >
                <View style={styles.row}>
                  <View style={[styles.column, { paddingLeft: 120 }]}>
                    <View
                      style={[
                        styles.priceBox,
                        {
                          zIndex: 1,
                          position: "absolute",
                          left: -10,
                        },
                      ]}
                    >
                      <Text style={styles.priceTitle}>฿{item.price}</Text>
                    </View>
                    <View style={{ position: "absolute", top: -36, left: 3 }}>
                      <Image
                        style={[
                          styles.column,
                          {
                            width: 100,
                            height: 160,
                            marginRight: 10,
                            borderRadius: 20,
                          },
                        ]}
                        overflow={"hidden"}
                        resizeMode={"stretch"}
                        source={{
                          uri:
                            "https://images.template.net/715/Free-Children-Book-Cover-Template-2.jpg",
                        }}
                      />
                    </View>
                  </View>

                  <View style={[styles.column, { flex: 1 }]}>
                    <View style={[styles.row, { flex: 2 }]}>
                      <Text style={styles.courseTitle}>{item.name}</Text>
                    </View>

                    <View style={styles.row}>
                      <Text
                        style={[
                          styles.courseDescription,
                          { flex: 1, flexWrap: "wrap" },
                        ]}
                      >
                        {item.description}
                      </Text>
                    </View>

                    <View style={styles.row}>
                      <View style={styles.column}>
                        <Text style={styles.row}>{item.tutors}</Text>
                      </View>

                      <View
                        style={[
                          styles.column,
                          {
                            flex: 1,
                            alignItems: "flex-end",
                          },
                        ]}
                      >
                        <Rating imageSize={20} readonly startingValue={item.rate} />
                      </View>
                    </View>
                  </View>
                </View>
                {/*Course Title*/}
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <PanelCategory />
      </SwipeablePanel>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  topic: {
    flex: 1,
    marginBottom: 20,
  },
  line: {
    marginVertical: 10,
    marginHorizontal: 8,
    paddingVertical: 0.4,
    backgroundColor: Colors.gray,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  box: {
    marginTop: -10,
    marginLeft: 8,
    paddingVertical: 10,
    paddingHorizontal: 2.5,
    borderRadius: 30,
    backgroundColor: Colors.primary,
  },
  priceBox: {
    marginLeft: 0,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: Colors.primary,
  },
  priceTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.white,
  },
  textRec: {
    flex: 1,
    alignSelf: "center",
    color: Colors.secondary,
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: Colors.white,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    elevation: 6,
    borderRadius: 18,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondary,
    paddingBottom: 10,
  },
  courseDescription: {
    fontSize: 13,
    flex: 1,
    flexWrap: "wrap",
    // backgroundColor: Colors.primary,
    color: Colors.heading,
    paddingBottom: 10,
  },
  bg: {
    backgroundColor: Colors.white,
  },
  view: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  viewItem: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
  },
  search: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginLeft: 20,
    borderRadius: 30,
    backgroundColor: Colors.gray,
  },
  searchBar: {
    backgroundColor: Colors.primary,
    paddingBottom: 10,
  },
  titleHome: {
    fontWeight: "bold",
    fontSize: 30,
    color: Colors.secondary,
  },
});
