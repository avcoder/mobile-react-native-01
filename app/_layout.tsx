import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "List",
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color }) => (
            <Feather name="watch" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color }) => (
            <Feather name="map-pin" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
