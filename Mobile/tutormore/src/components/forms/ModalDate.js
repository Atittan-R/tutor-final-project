import React, { useEffect, useState } from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../configs/Colors';
import CheckBox from "@react-native-community/checkbox";
import { Pressable } from 'react-native';

export default function ModalDate(props) {
    //set checkbox
    const [monday, setMonday] = useState();
    const [tuesday, setTuesday] = useState();
    const [wednesday, setWednesday] = useState();
    const [thursday, setThursday] = useState();
    const [friday, setFriday] = useState();
    const [saturday, setSaturday] = useState();
    const [sunday, setSunday] = useState();
    const [everyday, setEveryday] = useState();
    const [days, setDays] = useState();
    const [day,setDay]=props.dayValue;
    const [modalVisible, setModalVisible] = useState(false);
    const x=[];

    const selectDate = () => {
        checkday();
        if (sunday && monday && tuesday && wednesday && thursday && friday && saturday == true) {
            setEveryday(true);
            setModalVisible(!modalVisible);
        }
        else {
            setEveryday(false);
            setModalVisible(!modalVisible);
        }
    }
    const checkday = ()=>{
        monday? x.push("Mon"):x
        thursday? x.push("Thu"):x
        friday? x.push("Fri"):x
        wednesday? x.push("Wed"):x
        tuesday? x.push("Tue"):x
        sunday? x.push("Sun"):x
        saturday? x.push("Sat"):x
        setDay(x)
    }
    useEffect(() => {
        if (everyday == true) {
            setDays(['', '', '', '', '', '', ''])
            setDay(["Everyday"])

        } else {
            setDays(["Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat "])
        }
    }, [everyday])
    return (
        <View style={styles.inputItem} >
            <Text style={{ flex: 0.35, color: Colors.secondary }}>Date</Text>

            <View style={styles.textDate}>
                <View style={styles.wrapText}>
                    <Text style={styles.text}>{everyday ? days[7] : null}</Text>
                    <Text style={styles.text}>{sunday ? days[0] : null}</Text>
                    <Text style={styles.text}>{monday ? days[1] : null}</Text>
                    <Text style={styles.text}>{tuesday ? days[2] : null}</Text>
                    <Text style={styles.text}>{wednesday ? days[3] : null}</Text>
                    <Text style={styles.text}>{thursday ? days[4] : null}</Text>
                    <Text style={styles.text}>{friday ? days[5] : null}</Text>
                    <Text style={styles.text}>{saturday ? days[6] : null}</Text>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View
                                style={{
                                    paddingVertical: 10,
                                    borderBottomColor: Colors.secondary,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    alignItems: "center"
                                }}>
                                <Text style={{ fontWeight: "bold", color: Colors.secondary }}>Select Date</Text>
                            </View>
                            <TouchableOpacity
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed
                                            ? Colors.primary
                                            : Colors.white
                                    },
                                    styles.pressStyle
                                ]}
                                onPress={() => setSunday(!sunday)}>
                                <View style={styles.alignCheckBox}>
                                    <Text style={styles.text} >Sunday</Text>
                                    <CheckBox
                                        value={sunday}
                                        onValueChange={() => setSunday(!sunday)}
                                        style={styles.checkbox}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setMonday(!monday)}>
                                <View style={styles.alignCheckBox}>
                                    <Text style={styles.text}>Monday</Text>
                                    <CheckBox
                                        value={monday}
                                        onValueChange={() => setMonday(!monday)}
                                        style={styles.checkbox}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setTuesday(!tuesday)}>
                                <View style={styles.alignCheckBox}>
                                    <Text style={styles.text}>Tuesday</Text>
                                    <CheckBox
                                        value={tuesday}
                                        onValueChange={() => setTuesday(!tuesday)}
                                        style={styles.checkbox}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setWednesday(!wednesday)}>
                                <View style={styles.alignCheckBox}>
                                    <Text style={styles.text}>Wednesday</Text>
                                    <CheckBox
                                        value={wednesday}
                                        onValueChange={() => setWednesday(!wednesday)}
                                        style={styles.checkbox}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setThursday(!thursday)}>
                                <View style={styles.alignCheckBox}>
                                    <Text style={styles.text}>Thursday</Text>
                                    <CheckBox
                                        value={thursday}
                                        onValueChange={() => setThursday(!thursday)}
                                        style={styles.checkbox}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setFriday(!friday)}>
                                <View style={styles.alignCheckBox}>
                                    <Text style={styles.text}>Friday</Text>
                                    <CheckBox
                                        value={friday}
                                        onValueChange={() => setFriday(!friday)}
                                        style={styles.checkbox}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setSaturday(!saturday)}>
                                <View style={styles.alignCheckBox}>
                                    <Text style={styles.text}>Saturday</Text>
                                    <CheckBox
                                        value={saturday}
                                        onValueChange={() => setSaturday(!saturday)}
                                        style={styles.checkbox}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}>
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.saveButton}
                                    onPress={selectDate}
                                >
                                    <Text style={styles.textStyle}>Save</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={{ justifyContent: "flex-end" }}
                    onPress={() => {
                        setModalVisible(true);
                    }}>
                    <Icon name={'calendar'} type={'feather'} color={Colors.secondary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export const styles = StyleSheet.create({
    inputItem: {
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        marginHorizontal: 20,
    },
    modalView: {
        margin: 0,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 20,
        alignItems: "stretch",
        elevation: 2,
    },
    saveButton: {
        backgroundColor: Colors.primary,
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 10,
        elevation: 2,
    },
    closeButton: {
        backgroundColor: Colors.background,
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 10,
        elevation: 2,
    },
    textStyle: {
        color: Colors.secondary,
        textAlign: "center"
    },
    wrapText: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    pressStyle: {
        paddingVertical: 10,
        borderBottomColor: Colors.secondary,
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    groupCheckBox: {
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        paddingBottom: 20,
    },
    alignCheckBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "#fff",
    },
    textDate: {
        backgroundColor: Colors.background,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 0.8,
        paddingVertical: 13,
        justifyContent: "space-between",
    },
    text: {
        color: Colors.secondary
    },
})
