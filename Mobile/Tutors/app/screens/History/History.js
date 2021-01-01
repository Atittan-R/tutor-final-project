import QRCode from "react-native-qrcode-svg";
import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";
const DATA = [
  { id: 1, name: "Com Pro 1", price: 450 },
  { id: 2, name: "Com Pro 1", price: 450 },
  { id: 3, name: "Com Pro 1", price: 450 },
];

const History = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) =>  (
          <Card containerStyle={styles.card} name="Profile">
            <Card.Title style={styles.card_title}>Nozel Silvar</Card.Title>
            <Card.Divider />
            {
              <View name="Cart" style={styles.box_Cart}>
                <Image
                  style={styles.img}
                  source={require("../../assets/Appicon.png")}
                />
                <View name="product" style={styles.box_Product}>
                  <Text style={styles.box_Text}>{item.name}</Text>
                  <QRCode size={70} value="http://awesome.link.qr" />
                </View>
                <View style={styles.box_Product}>
                  <Text style={styles.box_Text_red}>X {1}</Text>
                  <Text style={styles.box_Text_red}>$ {item.price}</Text>
                </View>
              </View>
            }
            <Card.Divider />
            {
              <View style={styles.box}>
                <Text>not yet rated</Text>
                <View>
                  <Text style={styles.box_Text}>total price: {item.price}</Text>
                  <TouchableOpacity
                    style={styles.buttons_Add}
                    onPress={() => navigation.navigate("Maps")}
                  >
                    <Text style={styles.box_Text}>buy again</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          </Card>
        )}
      />
    </ScrollView>
  );
};
export default History;
