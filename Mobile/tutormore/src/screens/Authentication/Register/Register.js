import CheckBox from "@react-native-community/checkbox";
import React, { useEffect, useReducer, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import PrimaryInput from "../../../components/forms/PrimaryInput";
import Colors from "../../../configs/Colors";
import { useGlobalVar } from "../../../context/GlobalContex";
import API from "../../../services/API";
import { SwipeablePanel } from 'rn-swipeable-panel';
function Confrimation(state, action) {
  switch (action.type) {
    case "CONFIRM":
      return { ...state, confirm: action.value };
  }
}


const Register = ({ navigation }) => {
  const { auth } = useGlobalVar();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmMassage, setConfirmMassage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, dispatch] = useReducer(Confrimation, { confirm: "" });

  useEffect(() => {
    setConfirmMassage(checkConfirm(password, state.confirm));
  });

  const callAPI = async (data) => {
    try{
      const signup = await API.post("/auth/signup",{
        email: data.email,
        password: data.password,
        username: data.username,
        phonenumber: data.phoneNumber,
      });
      console.log(signup.data);
      auth.signUp(data)
    }catch (error){
      console.log(error.response.data.message);
    }
  }

  const checkConfirm = (password, confirm) => {
    let cf = null;
    if (confirm) {
      password === confirm ? (cf = true) : (cf = false);
    }
    return cf;
  };

  const [requireImage, setRequireImage] = useState(require('../../../assets/course/picture.png'));
    const [isPanelActive, setIsPanelActive] = useState(false);
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        onlySmall: true,
        showCloseButton: true,
        onClose: () => setIsPanelActive(false),
        onPressCloseButton: () => setIsPanelActive(false),
    });
    const changeImage = (id) => {
        if (id == 1) { setRequireImage(require('../../../assets/avatar/dwarf.png')); }
        else if (id == 2) { setRequireImage(require('../../../assets/avatar/elf.png')); }
        else if (id == 3) { setRequireImage(require('../../../assets/avatar/fairy.png')); }
        else if (id == 4) { setRequireImage(require('../../../assets/avatar/knight.png')); }

        else if (id == 5) { setRequireImage(require('../../../assets/avatar/little-red-riding-hood.png')); }
        else if (id == 6) { setRequireImage(require('../../../assets/avatar/mermaid.png')); }
        else if (id == 7) { setRequireImage(require('../../../assets/avatar/pig.png')); }
        else if (id == 8) { setRequireImage(require('../../../assets/avatar/robin-hood.png')); }

        else if (id == 9) { setRequireImage(require('../../../assets/avatar/scarecrow.png')); }
        else if (id == 10) { setRequireImage(require('../../../assets/avatar/teacher.png')); }
        else if (id == 11) { setRequireImage(require('../../../assets/avatar/wizard.png')); }
        else if (id == 12) { setRequireImage(require('../../../assets/avatar/wolf.png')); }
    }
  return (
   <>
    <ScrollView style={{ margin: 0, backgroundColor: Colors.white }}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Sign Up</Text>
        </View>
        {/* <View style={styles.btnWrapper}>
          <SecondaryButton
            label={"Sign Up With Facebook"}
            btnType={"FACEBOOK"}
            background={"dodgerblue"}
            fontColor={"white"}
          />
        </View> */}
        <TouchableOpacity onPress={() => setIsPanelActive(true)}>
                        <Image source={requireImage} style={styles.imageTitle} />
                        <Text style={styles.text}>Change image</Text>
                    </TouchableOpacity>
        <Text style={styles.textOr}>Or Sign up with E-mail</Text>

        <View style={styles.inputWrap}>
          <View style={styles.inputItem}>
            <PrimaryInput
              placeHolder={"Email Address"}
              keyboardType={"email-address"}
              autoCompleteType={'off'}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputItem}>
            <PrimaryInput
              placeHolder={"Username"}
              autoCompleteType={'off'}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.inputItem}>
            <PrimaryInput
              placeHolder={"Password"}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              autoCompleteType={'off'}
            />
          </View>
          <View style={styles.inputItem}>
            <PrimaryInput
              placeHolder={"Confirm Password"}
              onChangeText={(text) =>
                dispatch({ type: "CONFIRM", value: text })
              }
              autoCompleteType={'off'}
              secureTextEntry
            />
            {confirmMassage !== true && confirmMassage !== null && (
              <Text style={[styles.policyText, { color: "red" }]}>
                Password dosen't match{" "}
              </Text>
            )}
            {/*<Text>CFPassword is { state.confirm} </Text>*/}
          </View>
          <View style={styles.inputItem}>
            <PrimaryInput
              placeHolder={"Phone Number"}
              keyboardType={"phone-pad"}
              textContentType={'none'}
              onChangeText={(text) => setPhoneNumber(text)}
              autoCompleteType={'off'}
            />
          </View>
          <View style={styles.policy}>
            <Text style={styles.policyText}>
              I have read the{" "}
              <Text
                style={styles.policyLink}
                onPress={() => navigation.navigate("Register")}
              >
                Private Policy
              </Text>
            </Text>
            <View style={styles.policyCheckBox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onCheckColor={"green"}
                tintColor={"red"}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
            </View>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <PrimaryButton
            label={"Sign Up"}
            disable={confirmMassage}
            onPress={() => callAPI({ email, password, phoneNumber, username })
            }
          />
        </View>
      </View>
      </ScrollView>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => changeImage(1)} >
                        <Image source={require('../../../assets/avatar/dwarf.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(2)} >
                        <Image source={require('../../../assets/avatar/elf.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(3)} >
                        <Image source={require('../../../assets/avatar/fairy.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(4)} >
                        <Image source={require('../../../assets/avatar/knight.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => changeImage(5)} >
                        <Image source={require('../../../assets/avatar/little-red-riding-hood.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(6)} >
                        <Image source={require('../../../assets/avatar/mermaid.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(7)} >
                        <Image source={require('../../../assets/avatar/pig.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(8)} >
                        <Image source={require('../../../assets/avatar/robin-hood.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => changeImage(9)} >
                        <Image source={require('../../../assets/avatar/scarecrow.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(10)} >
                        <Image source={require('../../../assets/avatar/teacher.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(11)} >
                        <Image source={require('../../../assets/avatar/wizard.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(12)} >
                        <Image source={require('../../../assets/avatar/wolf.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>
            </SwipeablePanel>
    </>
  );
};

export default Register;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    padding: 5,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  textTitle: {
    fontSize: 30,
    fontStyle: "normal",
    color: Colors.primary,
  },
  textOr: {
    flex: 1,
    textAlign: "center",
    margin: 30,
    // fontFamily: "HelveticaNeue",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 30,
    color: Colors.gray,
  },
  inputWrap: {
    flex: 1,
    margin: 10,
  },
  inputItem: {
    flex: 1,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  policy: {
    flex: 1,
    flexDirection: "row",
  },
  policyText: {
    flex: 1,
    marginLeft: 18,
    marginTop: 5,
  },
  policyCheckBox: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  policyLink: {
    color: Colors.primary,
  },
  btnWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.white,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 10,
    marginTop: 15
},
image: {
  width: 60,
  height: 60,
  borderRadius: 5,
},
imageTitle: {
    width: 120,
    height: 120,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center"
},
text: {
    color: Colors.gray,
    alignSelf: "center",
    // fontWeight: "bold"
}
});
