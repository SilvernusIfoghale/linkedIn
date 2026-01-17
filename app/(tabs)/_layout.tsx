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
            return focused ? <NotificationActive /> : <NotificationInactive />;
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
