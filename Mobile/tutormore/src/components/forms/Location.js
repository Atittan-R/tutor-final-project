import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../configs/Colors";
import MapView, { Marker } from "react-native-maps";

export default function Location() {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [draggable, setDraggable] = useState({
    latitude: 51.5078788,
    longitude: -0.0877321,
  });
  function movementMarker(e) {
    // get coordinate from mapviews
    const { latitude, longitude } = e.coordinate;
    // update coordinate
    setDraggable({
      draggable: { latitude, longitude },
    });
  }
  function onClickMap(e) {
    const { latitude, longitude } = e.coordinate;
    setDraggable({
      latitude: latitude,
      longitude: longitude,
    });
  }
  return (
    <View style={styles.inputItem}>
      <Text style={{ flex: 0.35, color: Colors.secondary }} >Location</Text>
      <View style={styles.textDate}>
        <MapView
          style={styles.map}
          region={region}
          onRegionChangeComplete={(region) => setRegion(region)}
          onPress={(e) => onClickMap(e.nativeEvent)}
        >
          <Marker
            draggable
            coordinate={draggable}
            onDragStart={true}
            onDragEnd={(e) => movementMarker(e.nativeEvent)}
          />
        </MapView>
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  inputItem: {
    margin: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    flex: 1,
  },
  textDate: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.9,
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
    width: 230
  },
});
