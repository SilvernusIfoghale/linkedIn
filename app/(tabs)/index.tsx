import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { dummyData } from "../data";

const Home = () => {
  const posts = dummyData;
  return (
    <SafeAreaView style={styles.safeAreaTop}>
      <View style={styles.container}>
        <Header />
        <View>
          <FlatList
            contentContainerStyle={{ paddingBottom: 25 }}
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PostCard
                Profile={item.profile}
                title={item.title}
                verified={item.verified}
                follow={item.follow}
                niche={item.niche}
                time={item.time}
                content={item.content}
                tags={item.tags}
                Image={item.image}
                emoji={item.emoji}
                likes={item.likes}
                comments={item.comments}
                reposts={item.reposts}
              />
            )}
          />
        </View>
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
