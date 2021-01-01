import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../config/colors";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ButtonShared } from "../../components/buttons/ButtonShared";
import { Icon } from "react-native-elements";
const Notification = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <SafeAreaView style={styles.contrainer}>
          <View style={styles.coverArea}>
            <View style={styles.viewItem}>
              <Image
                source={require("../../assets/profile.jpg")}
                style={styles.imageProfile}
              />
              <Text> Tanjiro </Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Course</Text>
              <Text style={styles.textNormal}>Calculus</Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Date</Text>
              <Text style={styles.textNormal}>Mon Tue</Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Time Start</Text>
              <Text style={styles.textNormal}>17:30</Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Time End</Text>
              <Text style={styles.textNormal}>20:30</Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Duration</Text>
              <Text style={styles.textNormal}>1 Month</Text>
            </View>
            <View style={styles.viewItem}>
              <TouchableOpacity
                style={styles.buttonTake}
                onPress={() => navigation.navigate("Screen1")}
              >
                <Text style={styles.label}> Take </Text>
              </TouchableOpacity>
              <ButtonShared label="Share" />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name={"home"} type={"feather"} color={colors.secondary} />
          <Text style={styles.menuText}> Home </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name={"layers"} type={"feather"} color={colors.secondary} />
          <Text style={styles.menuText}> Feed </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon
            name={"message-circle"}
            type={"feather"}
            color={colors.secondary}
          />
          <Text style={styles.menuText}> Chat </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Notification")}
        >
          <Icon name={"bell"} type={"feather"} color={colors.secondary} />
          <Text style={styles.menuText}> Notify </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("MyProfile")}
        >
          <Icon name={"user"} type={"feather"} color={colors.secondary} />
          <Text style={styles.menuText}> Me </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Notification;
