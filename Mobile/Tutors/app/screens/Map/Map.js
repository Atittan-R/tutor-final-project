import React, { useState, version } from "react";
import { View, TouchableOpacity, TextInput, Button, Image, } from "react-native";
import { AirbnbRating, Card, Rating, Text, Tile } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";
import { ScrollView } from "react-native";

const Maps = () => {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });
  const [date, setDateNow] = useState(new Date());
  const [duration, setDuration] = useState(3);
  const [price, setPrice] = useState(300);

  const [Profile, setProfile] = useState({
    name: "Yami Sukehiro",
    major: "Information of Technology(ES)",
    rating: 5,
  });

  const [draggable, setDraggable] = useState({
    latitude: 51.5078788, longitude: -0.0877321
  })




  function movementMarker(e) {
    // get coordinate from mapviews
    const { latitude, longitude } = e.coordinate
    // update coordinate
    setDraggable({
      draggable: { latitude, longitude }
    })
  }
  function onClickMap(e) {
    const { latitude, longitude } = e.coordinate
    setDraggable({
      latitude: latitude,
      longitude: longitude
    })
  }

  return (

    <>
      <ScrollView style={styles.container}>
        <Card containerStyle={styles.card} name="DateTime">

          {
            <View style={{ padding: 10, justifyContent: "flex-end" }}>
              <View style={styles.box}>
                <Image
                  source={require('../../assets/images/1f4c6.png')}
                />
                <Text style={styles.box_Text}>Date</Text>
                <Text style={styles.box_Text_content}>{date.toDateString()}</Text>
              </View>
              <View style={styles.box}>
                <Image
                  source={require('../../assets/images/23f1.png')}
                />
                <Text style={styles.box_Text}>Time</Text>
                <Text style={styles.box_Text_content}>{+date.getHours() + ":" + date.getMinutes()}</Text>
              </View>
              <View style={styles.box}>
                <Image
                  source={require('../../assets/images/23f1.png')}
                />
                <Text style={styles.box_Text}>Duration</Text>
                <Text style={styles.box_Text_content}>{duration} months</Text>
              </View>
              <View style={styles.box}>
                <Image
                  source={require('../../assets/images/23f1.png')}
                />
                <Text style={styles.box_Text}>Price</Text>
                <Text style={styles.box_Text_content}>$ {+price}</Text>
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
                <Text>{Profile.name}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.box_Text}>Major</Text>
                <Text >{Profile.major}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.box_Text}>Rating</Text>
                <AirbnbRating starContainerStyle={styles.rating}
                  size={20}
                  reviewSize={15}
                  defaultRating={Profile.rating}
                  isDisabled={true}
                />
              </View>
            </View>
          }
        </Card>
        <Card containerStyle={styles.card} name="Map">
          
          <View style={styles.box}>
          <Image
                  source={require('../../assets/images/23f1.png')}
                />
            <Card.Title style={styles.box_Text}>Place </Card.Title>
            <Text style={styles.box_Text_content}>Suranari, Mueang Nakhon Rat...</Text>
          </View>
          {
            <View>
              <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={region => setRegion(region)}
                onPress={(e) => onClickMap(e.nativeEvent)}
              >
                <Marker draggable coordinate={draggable}
                  onDragStart
                  onDragEnd={(e) => movementMarker(e.nativeEvent)}
                />
              </MapView>
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
  );
};
export default Maps;