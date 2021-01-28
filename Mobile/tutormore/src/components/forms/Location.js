import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../configs/Colors";
import MapView, { Marker } from "react-native-maps";


export default function Location(props) {
  const [draggable, setDraggable] =props.draggable
  const [lat, setlat] = props.lat
  const [long, setlong] = props.long
  const [modalVisible, setModalVisible] = props.modal
  const [region, setRegion] = useState({
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    latitude:  14.8817767,
    longitude:  102.0185075,
   
  });
  // const mapRef=React.createRef();
  function movementMarker(e) {
    const { latitude, longitude } = e.coordinate;
    setlat(latitude)
    setlong(longitude)
    // get coordinate from mapviews

    // update coordinate
    setDraggable({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    
    console.log(latitude,"=",lat);
    console.log(longitude,"=",long);
 
  }
 
  const map=async(region)=>{
    console.log('====================================');
    console.log(region);
    console.log('====================================');
   await setDraggable(region);
   await setRegion(region)
  //  mapRef.current.animateToRegion(region)
   setlat(draggable.latitude)
   setlong(draggable.longitude)
  }
useEffect(() => {
  setDraggable(draggable)
}, [draggable])
  return (
    <View style={styles.inputItem}>
      { !modalVisible &&
        <Text style={{ flex: 0.35, color: Colors.secondary }}>Location</Text>
      }

      <View style={styles.textDate}>
        <MapView
        // ref={mapRef}
          style={
            modalVisible ?
              styles.mapfull
              :
              styles.map}
          // region={region}
          initialRegion={draggable}
          pitchEnabled={false}

          rotateEnabled={false}

          // scrollEnabled={false}

          zoomEnabled
          onRegionChangeComplete={(region) => setDraggable(region)}
        // onPress={(e) => onClickMap(e.nativeEvent)}
        >
          <MapView.Marker
            // draggable
            coordinate={draggable}
            // position={Point} 
            title="tutor"
            // onDragStart={(e) => movementMarker(e.nativeEvent)}
            // onDragEnd={(e) => movementMarker(e.nativeEvent)}
            
          />
        </MapView>
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  inputItem: {
    flex: 1,
    justifyContent:"center",
  
   
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

    height: 750/5,
    flex:1,
    flexWrap:"wrap"
  },
  mapfull: {
    height: 750,
    flex:1
  },
});
