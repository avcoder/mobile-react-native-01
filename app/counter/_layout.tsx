import { Feather } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => {
            return (
              <Link href="/counter/history">
                <Pressable hitSlop={20}>
                  <Feather name="archive" size={32} color={theme.colorGrey} />
                </Pressable>
              </Link>
            );
          },
        }}
      />
    </Stack>
  );
}
