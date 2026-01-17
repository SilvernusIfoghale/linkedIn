import {
  MessageIcon,
  ProfileIcon,
  SearchIcon,
} from "@/assets/images/icons/icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.containerTop}>
      <View>
        <ProfileIcon />
      </View>
      <View style={styles.inputContainer}>
        <SearchIcon />
        <TextInput placeholder="Search" style={{ height: 38 }} />
      </View>
      <View>
        <MessageIcon />
        <View style={styles.notify}>
          <Text style={{ color: "#ffffff", fontSize: 9, fontWeight: "600" }}>
            5
          </Text>
        </View>
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
    height: 35,
    gap: 5,
    borderWidth: 1.5,
    borderColor: "#b9b9b9",
    paddingLeft: 18,
    borderRadius: 30,
  },
  notify: {
    position: "absolute",
    right: -5,
    top: -7,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderColor: "#ffffff",
    borderWidth: 1,
    backgroundColor: "#df0d0d",
    justifyContent: "center",
    alignItems: "center",
  },
});
