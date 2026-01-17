import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaTop}>
      <View style={styles.container}>
        <Header />
        <PostCard />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },
});
