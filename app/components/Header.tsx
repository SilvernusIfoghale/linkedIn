import {
  MessageIcon,
  ProfileIcon,
  SearchIcon,
} from "@/assets/images/icons/icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.containerTop}>
      <View>
        <ProfileIcon />
      </View>
      <View style={styles.inputContainer}>
        <SearchIcon />
        <TextInput placeholder="Search" />
      </View>
      <View>
        <MessageIcon />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerTop: {
    height: 58,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#ffffff",
    paddingHorizontal: 14.5,
    paddingVertical: 17,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "73%",
    height: 40,
    gap: 5,
    borderWidth: 1.5,
    borderColor: "#9a9a9a",
    paddingLeft: 20,
    borderRadius: 30,
  },
});
