import CheckBox from "@react-native-community/checkbox";
import React, {useEffect, useReducer, useState} from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View
} from "react-native";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import PrimaryInput from "../../../components/forms/PrimaryInput";
import Colors from "../../../configs/Colors";
import {useGlobalVar} from "../../../context/GlobalContex";
import API from "../../../services/API";
import {SwipeablePanel} from 'rn-swipeable-panel';
import avatars from "../../../configs/avatars";
import categories from "../../../configs/categories";
import Catagory from "../../../components/forms/Catagory";

function Confrimation(state, action) {
    switch (action.type) {
        case "CONFIRM":
            return {...state, confirm: action.value};
    }
}


const Register = ({navigation}) => {
    const {auth} = useGlobalVar();
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(0);
    const [confirmMassage, setConfirmMassage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [state, dispatch] = useReducer(Confrimation, {confirm: ""});
    const [catagory, setCatagory] = useState("");
    useEffect(() => {
        setConfirmMassage(checkConfirm(password, state.confirm));
    });

    const callAPI = async (data) => {
        try {
            const signup = await API.post("/auth/signup", {
                email: data.email,
                password: data.password,
                username: data.username,
                phonenumber: data.phoneNumber,
                avatar: data.avatar,
                catagory: data.catagory,
            });
            console.log(signup.data);
            ToastAndroid.show("Register Success!", ToastAndroid.LONG);
            navigation.navigate("Login");
        } catch (error) {
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

    const [requireImage, setRequireImage] = useState(avatars[0].image);
    const [isPanelActive, setIsPanelActive] = useState(false);
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        onlySmall: true,
        showCloseButton: true,
        onClose: () => setIsPanelActive(false),
        onPressCloseButton: () => setIsPanelActive(false),
    });
    const changeImage = (avatarId) => {
        //Set Image to Frontend
        setRequireImage(avatars[avatarId].image);
        //Save to DB
        setAvatar(avatarId);
    }
    return (
        <>

                <ScrollView style={{margin: 0, backgroundColor: Colors.white}}>
                    {/*<KeyboardAvoidingView behavior="padding">*/}
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textTitle}>Sign Up</Text>
                        </View>
                        <TouchableOpacity onPress={() => setIsPanelActive(true)}>
                            <Image source={requireImage} style={styles.imageTitle}/>
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
                                        dispatch({type: "CONFIRM", value: text})
                                    }
                                    autoCompleteType={'off'}
                                    secureTextEntry
                                />
                                {confirmMassage !== true && confirmMassage !== null && (
                                    <Text style={[styles.policyText, {color: "red"}]}>
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
                                {/*<Text>*/}
                                {/*    {`${categories[0].id} ${categories[0].name}`}*/}
                                {/*</Text>*/}
                            </View>
                            <Catagory
            selectedValue={catagory}
            onValueChange={(itemValue, itemIndex) => setCatagory(itemValue)}
          />
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
                                onPress={() => callAPI({email, password, phoneNumber, username, avatar})
                                }
                            />
                        </View>
                    </View>
            {/*</KeyboardAvoidingView>*/}
                </ScrollView>

                <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => changeImage(1)}>
                            <Image source={avatars[1].image} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeImage(2)}>
                            <Image source={avatars[2].image} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeImage(3)}>
                            <Image source={avatars[3].image} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeImage(4)}>
                            <Image source={avatars[4].image} style={styles.image}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => changeImage(5)}>
                            <Image source={avatars[5].image}
                                   style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeImage(6)}>
                            <Image source={avatars[6].image} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeImage(7)}>
                            <Image source={avatars[7].image} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeImage(8)}>
                            <Image source={avatars[8].image} style={styles.image}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => changeImage(9)}>
                            <Image source={avatars[9].image} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeImage(10)}>
                            <Image source={avatars[10].image} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeImage(11)}>
                            <Image source={avatars[11].image} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeImage(12)}>
                            <Image source={avatars[12].image} style={styles.image}/>
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
