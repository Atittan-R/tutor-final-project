import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../configs/Colors";
import MapView, { Marker } from "react-native-maps";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default function Location(props) {
  const [lat, setlat] = props.lat
  const [long, setlong] = props.long
  const [modalVisible, setModalVisible] = props.modal
  const [draggable, setDraggable] = useState({
    latitude: lat || 14.8817767,
    longitude: long || 102.0185075,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  function movementMarker(e) {
    const { latitude, longitude } = e.coordinate;
    setlat(latitude)
    setlong(longitude)
    // get coordinate from mapviews

    // update coordinate
    setDraggable({
      latitude: latitude,
      longitude: longitude
    });

  }
  function onClickMap(e) {
    const { latitude, longitude } = e.coordinate;
    setlat(latitude)
    setlong(longitude)
    setDraggable({
      latitude: latitude,
      longitude: longitude
    });
  }

  return (
    <View style={styles.inputItem}>
      { !modalVisible &&
        <Text style={{ flex: 0.35, color: Colors.secondary }}>Location</Text>
      }

      <View style={styles.textDate}>
        <MapView
          style={
            modalVisible ?
              styles.mapfull
              :
              styles.map}
          region={draggable}
          pitchEnabled={false}

          rotateEnabled={false}

          scrollEnabled

          zoomEnabled
          // onRegionChangeComplete={(region) => setDraggable(region)}
        onPress={(e) => onClickMap(e.nativeEvent)}
        >
          <MapView.Marker
            draggable
            coordinate={draggable}
            title="Aqui estoy"
            // onDragStart={true}
            onDragEnd={(e) => movementMarker(e.nativeEvent)}
          />
        </MapView>
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  inputItem: {
    flex: 1,
  },
  textDate: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  drop: {
    height: 20,
    width: 200,
    justifyContent: "space-between",
    fontSize: 20,
    color: Colors.secondary
  },
  text: {
    color: Colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: Colors.gray
  },
  map: {
    height: 150,
    width: 230,
  },
  mapfull: {
    height: 750,
    flexGrow: 1
  },
});
