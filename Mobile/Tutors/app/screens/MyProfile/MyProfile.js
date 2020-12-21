import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  Pressable

} from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../config/colors";
import { useNavigation } from "@react-navigation/native";
import { Icon } from 'react-native-elements';



const MyProfile = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.bg }}>
        <SafeAreaView style={styles.contrainer}>
          <View style={styles.coverArea}>
            <View style={styles.coverArea}>
              <Image source={require("../../assets/profile.jpg")} style={styles.imageProfile} />
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Name</Text>
              <Text style={styles.textNormal}>Yami Sukehiro</Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Major</Text>
              <Text style={styles.textNormal}>Information of Technology</Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Tel.</Text>
              <Text style={styles.textNormal}>091246810</Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Email</Text>
              <Text style={styles.textNormal}>yami00z@mail.com</Text>
            </View>
          </View>

          <View style={{ padding: 5 }}></View>

          <View style={styles.coverArea}>
            <Pressable
              // onPress={() => navigation.navigate("Require")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.primary
                    : colors.white
                },
                styles.wrapperCustom
              ]}>
              <View style={styles.viewItem}>
                <Icon name={'plus-circle'} type={'feather'} color={colors.second} />
                <Text style={styles.textNormal}>Create My Course</Text>
                <Icon name={'chevron-right'} type={'feather'} color={colors.second} />
              </View>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("Require")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.primary
                    : colors.white
                },
                styles.wrapperCustom
              ]}>
              <View style={styles.viewItem}>
                <Icon name={'git-pull-request'} type={'feather'} color={colors.second} />
                <Text style={styles.textNormal}>Request</Text>
                <Icon name={'chevron-right'} type={'feather'} color={colors.second} />
              </View>
            </Pressable>
            <Pressable
              // onPress={() => navigation.navigate("Require")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.primary
                    : colors.white
                },
                styles.wrapperCustom
              ]}>
              <View style={styles.viewItem}>
                <Icon name={'archive'} type={'feather'} color={colors.second} />
                <Text style={styles.textNormal}>Course History</Text>
                <Icon name={'chevron-right'} type={'feather'} color={colors.second} />
              </View>
            </Pressable>
            <Pressable
              // onPress={() => navigation.navigate("Require")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.primary
                    : colors.white
                },
                styles.wrapperCustom
              ]}>
              <View style={styles.viewItem}>
                <Icon name={'book-open'} type={'feather'} color={colors.second} />
                <Text style={styles.textNormal}>Teaching List</Text>
                <Icon name={'chevron-right'} type={'feather'} color={colors.second} />
              </View>
            </Pressable>
            <Pressable
              // onPress={() => navigation.navigate("Require")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.primary
                    : colors.white
                },
                styles.wrapperCustom
              ]}>
              <View style={styles.viewItem}>
                <Icon name={'stars'} type={'material'} color={colors.second} />
                <Text style={styles.textNormal}>My Rating</Text>
                <Icon name={'chevron-right'} type={'feather'} color={colors.second} />
              </View>
            </Pressable>
            <Pressable
              // onPress={() => navigation.navigate("Require")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.primary
                    : colors.white
                },
                styles.wrapperCustom
              ]}>
              <View style={styles.viewItem}>
                <Icon name={'star'} type={'feather'} color={colors.second} />
                <Text style={styles.textNormal}>To Rating</Text>
                <Icon name={'chevron-right'} type={'feather'} color={colors.second} />
              </View>
            </Pressable>
            <Pressable
              // onPress={() => navigation.navigate("Require")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.primary
                    : colors.white
                },
                styles.wrapperCustom
              ]}>
              <View style={styles.viewItem}>
                <Icon name={'bookmark'} type={'feather'} color={colors.second} />
                <Text style={styles.textNormal}>My Ticket</Text>
                <Icon name={'chevron-right'} type={'feather'} color={colors.second} />
              </View>
            </Pressable>
            <Pressable
              // onPress={() => navigation.navigate("Require")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.primary
                    : colors.white
                },
                styles.wrapperCustom
              ]}>
              <View style={styles.viewItem}>
                <Icon name={'edit'} type={'feather'} color={colors.second} />
                <Text style={styles.textNormal}>Edit Profile</Text>
                <Icon name={'chevron-right'} type={'feather'} color={colors.second} />
              </View>
            </Pressable>
          </View>

          <View style={{ padding: 5 }}></View>

          <View style={styles.coverArea}>
            <Pressable
              // onPress={() => navigation.navigate("Require")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.primary
                    : colors.white
                },
                styles.wrapperCustom
              ]}>
              <View style={styles.viewItem}>
                <Icon name={'log-out'} type={'feather'} color={colors.second} />
                <Text style={styles.textNormal}>Sign Out</Text>
                <Icon name={'chevron-right'} type={'feather'} color={colors.second} />
              </View>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name={'home'} type={'feather'} color={colors.second} />
          <Text style={styles.menuText}> Home </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name={'layers'} type={'feather'} color={colors.second} />
          <Text style={styles.menuText}> Feed </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name={'message-circle'} type={'feather'} color={colors.second} />
          <Text style={styles.menuText}> Chat </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}  onPress={() => navigation.navigate("Notification")}>
          <Icon name={'bell'} type={'feather'} color={colors.second} />
          <Text style={styles.menuText}> Notify </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}  onPress={() => navigation.navigate("MyProfile")}>
          <Icon name={'user'} type={'feather'} color={colors.second} />
          <Text style={styles.menuText}> Me </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MyProfile;
