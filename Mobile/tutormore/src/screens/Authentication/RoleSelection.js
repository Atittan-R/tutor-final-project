import React, { useEffect, useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../configs/Colors";
import CharacterMrTeacherFullBody from "../../assets/characters/CharacterMrTeacherFullBody";
import CharacterStudentFullBody from "../../assets/characters/CharacterStudentFullBody";
import { PrivilegeTutor, PrivilegeUser } from "../../Navigations/Privilege";
import {useGlobalVar} from "../../context/GlobalContex";
const RoleSelection = () => {
  const { auth } = useGlobalVar();
  const [selected, setSelected] = useState({
    role_select: "",
    tutorColor: Colors.white,
    studentColor: Colors.white,
  });

  useEffect(() => {
    console.log("set", selected);
    setSelected(selected);
  }, [selected]);

  const onSubmitHandler = (role) => {
    auth.roleEntry({role});
    // callback(role);
  };
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 30 }}>
        <View style={{ marginTop: 64 }}>
          <Text style={{ fontSize: 36 }}>One</Text>
          <Text style={{ fontSize: 36 }}>More thing!</Text>
          <Text style={{ fontSize: 12 }}>
            We would like to know you what role you will play ..
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 12, marginBottom: 10 }}>
            {" "}
            Who you would like to be?{" "}
          </Text>
          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  setSelected({
                    role_select: "ROLE_TUTOR",
                    tutorColor: Colors.primary,
                    studentColor: Colors.white,
                  })
                }
              >
                <View
                  style={[
                    styles.card,
                    styles.column,
                    { backgroundColor: selected.tutorColor },
                  ]}
                >
                  <CharacterMrTeacherFullBody />
                </View>
              </TouchableOpacity>
              <Text
                style={{ fontSize: 16, marginTop: 15, textAlign: "center" }}
              >
                Tutor
              </Text>
            </View>

            <View style={styles.column}>
              <View style={styles.column}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    setSelected({
                      role_select: "ROLE_USER",
                      tutorColor: Colors.white,
                      studentColor: Colors.primary,
                    })
                  }
                >
                  <View
                    style={[
                      styles.card,
                      styles.column,
                      { backgroundColor: selected.studentColor },
                    ]}
                  >
                    <CharacterStudentFullBody />
                  </View>
                </TouchableOpacity>
                <Text
                  style={{ fontSize: 16, marginTop: 15, textAlign: "center" }}
                >
                  Student
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  marginTop: 60,
                  borderRadius: 30,
                  backgroundColor: Colors.facebookBg,
                }}
                onPress={() => onSubmitHandler(selected.role_select)}
              >
                <View
                  style={{
                    paddingVertical: 10,
                    borderRadius: 30,
                    backgroundColor: Colors.primary,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, textAlignVertical: "center" }}>
                    Let's go!
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    minHeight: 230,
    justifyContent: "center",
    marginRight: 16,
    minWidth: 160,
    alignItems: "center",
  },
});

export default RoleSelection;