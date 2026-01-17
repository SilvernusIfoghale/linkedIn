import { Profile1 } from "@/assets/images/icons/icons";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PostCard = () => {
  return (
    <View style={styles.main}>
      <View style={styles.cardHeader}>
        {/* left  */}
        <View>
          <Profile1 />
        </View>
        {/* center  */}
        <View style={{ flex: 1, marginStart: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={{ fontSize: 14, fontWeight: "medium" }}>
              Nicholas White
            </Text>
            <Entypo name="dot-single" size={12} color="#666666" />
            <Text style={{ fontSize: 11, color: "#808080" }}>Following</Text>
          </View>
          <View>
            <Text
              numberOfLines={1}
              style={{ color: "#808080", fontSize: 11, paddingEnd: 35 }}
            >
              Engineer, Content Creator, & Educator
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "gray", fontSize: 12 }}>3d</Text>
            <Entypo name="dot-single" size={12} color="gray" />
            <Entypo name="globe" size={10} color="gray" />
          </View>
        </View>
        {/* right  */}
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Entypo name="dots-three-vertical" size={16} color="gray" />
          <Ionicons name="close" size={20} color="#525252" />
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  main: {
    marginVertical: 7,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
