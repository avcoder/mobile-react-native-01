import { Platform } from "react-native"; // create this file in utils/registerForPushNotificationsAsync.ts
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

export async function registerForPushNotificationsAsync() {
  // devs can only ask users once; else user > settings
  console.info("Platform.OS: ", Platform.OS);
  if (Platform.OS === "android") {
    // Android requires all notifs be assigned to a channel
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.DEFAULT,
      vibrationPattern: [0, 250, 250, 250],
      showBadge: false,
    });
  }

  console.info("Device.isDevice: ", Device.isDevice);
  if (Device.isDevice) {
    // checks if running on a real physical device. Notifs may not work on emulators
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    if (existingStatus !== "granted") {
      // hover status to see other options besides 'granted'
      const { status } = await Notifications.requestPermissionsAsync(); // Makes permission popup appear
      return status;
    } else {
      return existingStatus;
    }
  } else {
    return null;
  }
}
