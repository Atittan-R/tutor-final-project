import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <>
      <SafeAreaView style={styles.container} />
      <View style={styles.viewItem}>
        <Text style={styles.titleHome}>Tutor More</Text>
        <TouchableOpacity
          style={styles.search}
          onPress={() => navigation.push("Search")}
        >
          <Text style={{ color: Colors.secondary }}>search</Text>
          <Icon
            name="search-outline"
            type="ionicon"
            style={{ color: Colors.secondary }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Signed in!</Text>
        <Button title="Sign out" onPress={auth.signOut} />
      </View>
      <Button
        title={"Course Detail"}
        onPress={() => navigation.push("CourseDetail")}
      ></Button>
      <ScrollView style={styles.bg}>
        <View style={styles.view}>{majors}</View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
