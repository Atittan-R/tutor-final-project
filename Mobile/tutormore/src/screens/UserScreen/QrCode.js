import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import Colors from "../../configs/Colors";

export default function QrCode({ navigation, route }) {
  const { id, name } = route.params;
  return (
    <>
      <SafeAreaView style={styles.container} />
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={{ color: Colors.secondary, marginRight: 10 }}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <QRCode value={id} size={200} color={Colors.secondary} backgroundColor={Colors.primary} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerBar: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primary
  },
  card: {
    padding: 5,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  text: {
    fontSize: 20,
    color: Colors.secondary
  }
});
