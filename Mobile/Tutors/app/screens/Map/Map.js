import React, { useState, version } from "react";
import { View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { AirbnbRating, Card, Image, Rating, Text } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";
import DatePicker from "react-native-datepicker";
import TimePicker from "react-native-simple-time-picker";

const Maps = () => {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [dateState, setDate] = useState("2020-01-01");
  const [selectedHours, setHours] = useState(0);
  const [selectedMinutes, setMinutes] = useState(0);
  return (
    function ratingCompleted(rating) {
      console.log("Rating is: " + rating);
    },
    (
      <>
        <ScrollView style={styles.container}>
          <Card containerStyle={styles.card} name="DateTime">
            {
              <View style={{ padding: 10, justifyContent: "flex-end" }}>
                <View style={styles.box}>
                  <Text style={styles.box_Text}>Date</Text>
                  <DatePicker
                    style={{ width: 200 }}
                    date={dateState}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2020-01-01"
                    maxDate="2020-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        right: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                      },
                    }}
                    onDateChange={(date) => {
                      console.log(date);
                      setDate(date);
                    }}
                  />
                </View>
                <View style={styles.box}>
                  <Text style={styles.box_Text}>Time</Text>
                  <TimePicker
                    selectedHours={selectedHours}
                    selectedMinutes={selectedMinutes}
                    onChange={(hours) => {
                      setHours({ hours }), setMinutes({ minutes });
                    }}
                  />
                </View>
                <View style={styles.box}>
                  <Text style={styles.box_Text}>Price</Text>
                </View>
              </View>
            }
          </Card>

          <Card containerStyle={styles.card} name="TutorProfil">
            <Card.Title style={styles.card_title}>Tutor Profile</Card.Title>
            <Card.Divider />
            {
              <View style={{ padding: 10, justifyContent: "flex-end" }}>
                <View style={styles.box}>
                  <Text style={styles.box_Text}>Name</Text>
                  <Text>Yami Sukehiro</Text>
                </View>
                <View style={styles.box}>
                  <Text style={styles.box_Text}>Major</Text>
                  <Text>Information of Technology(ES)</Text>
                </View>
                <View style={styles.box}>
                  <Text style={styles.box_Text}>Rating</Text>
                </View>
              </View>
            }
          </Card>
          <Card containerStyle={styles.card} name="Map">
            <Card.Title style={styles.card_title}>Place</Card.Title>
            <Card.Divider />

            {
              <View>
                <MapView
                  userInteraction={false}
                  showsMyLocationButton={false}
                  pitchEnabled={false}
                  style={styles.map}
                  region={region}
                  onRegionChangeComplete={(region) => setRegion(region)}
                >
                  <Marker
                    coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }}
                  />
                </MapView>
                <View style={styles.map_btn}>
                  <TouchableOpacity>
                    <Text style={styles.buttons_text}> see map </Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          </Card>
        </ScrollView>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.buttons_text}> Chat </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.buttons_text}> Add to Cart </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons_Buy}>
            <Text style={styles.buttons_text}> Buy </Text>
          </TouchableOpacity>
        </View>
      </>
    )
  );
};

export default Maps;
