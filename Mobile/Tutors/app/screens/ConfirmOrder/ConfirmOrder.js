import React from "react";
import { Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../config/colors";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
const ConfirmOrder = () => {
    const navigation = useNavigation();
    return (
        <>
            <ScrollView style={{ backgroundColor: colors.bg }}>
                <SafeAreaView style={styles.contrainer}>
                    <View style={styles.coverArea}>
                        <View style={styles.viewItem}>
                            <Image source={require("../../assets/profile.jpg")} style={styles.imageProfile} />
                            <Text style={styles.textProfile}>Yami Sukehiro</Text>
                        </View>
                        <View style={styles.viewItem}>
                            <Image source={require("../../assets/Appicon.png")} style={styles.imageItem} />
                            <View style={styles.textProfile}>
                                <Text>Database</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text>฿400</Text>
                                    <Text>x1</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 5 }}></View>
                    <View style={styles.coverArea}>
                        <View style={styles.viewItem}>
                            <Icon name={'dollar-sign'} type={'feather'} color={colors.second} />
                            <Text style={styles.textProfile}>Payment</Text>
                            <Text>Krung Thai</Text>
                            <Icon name={'chevron-right'} type={'feather'} color={colors.second} />
                        </View>
                        <View style={styles.viewItem}>
                            <Text>Price</Text>
                            <Text>฿400</Text>
                        </View>
                        <View style={styles.viewItem}>
                            <Text>Amount</Text>
                            <Text>x1</Text>
                        </View>
                        <View style={styles.viewItem}>
                            <Text>Total Price</Text>
                            <Text style={{ color: "red" }}>฿400</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
            <View style={styles.menu}>
                <View style={styles.viewItem}>
                    <View style={{ left: 100, flexDirection: "row" }}>
                        <Text style={colors.second}>Total Price:</Text>
                        <Text style={{ color: "red" }}> ฿400</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate("Payment")}>
                        <Text style={styles.menuText}> Buy </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default ConfirmOrder;
