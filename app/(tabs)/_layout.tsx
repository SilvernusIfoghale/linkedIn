import {
  HomeActive,
  HomeInactive,
  JobsActive,
  JobsInactive,
  NetworkActive,
  NetworkInactive,
  NotificationActive,
  NotificationInactive,
  PostActive,
  PostInactive,
} from "@/assets/images/icons/icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          textAlign: "center",
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            return focused ? <HomeActive /> : <HomeInactive />;
          },
        }}
      />
      <Tabs.Screen
        name="MyNetwork"
        options={{
          tabBarLabel: "My Network",
          tabBarIcon: ({ focused }) => {
            return focused ? <NetworkActive /> : <NetworkInactive />;
          },
        }}
      />
      <Tabs.Screen
        name="Post"
        options={{
          tabBarLabel: "Post",
          tabBarIcon: ({ focused }) => {
            return focused ? <PostActive /> : <PostInactive />;
          },
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View>
                <NotificationActive />
                <View style={styles.notify}>
                  <Text
                    style={{ color: "#ffffff", fontSize: 9, fontWeight: "600" }}
                  >
                    15
                  </Text>
                </View>
              </View>
            ) : (
              <View>
                <NotificationInactive />
                <View style={styles.notify}>
                  <Text
                    style={{ color: "#ffffff", fontSize: 9, fontWeight: "600" }}
                  >
                    15
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Jobs"
        options={{
          tabBarLabel: "Jobs",
          tabBarIcon: ({ focused }) => {
            return focused ? <JobsActive /> : <JobsInactive />;
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  notify: {
    position: "absolute",
    right: -5,
    top: -7,
    width: 17,
    height: 17,
    borderRadius: 8,
    borderColor: "#ffffff",
    borderWidth: 1,
    backgroundColor: "#df0d0d",
    justifyContent: "center",
    alignItems: "center",
  },
});
