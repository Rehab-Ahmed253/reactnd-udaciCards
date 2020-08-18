import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "MOBILE_FLASHCARDS:notification";

export function setNotification() {
  return AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync;

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate());
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day",
            });

            AsyncStorage.setItem(
              NOTIFICATION_KEY,
              JSON.stringify({ notification: "set" })
            );
          }
        });
      }
    });
}

export function createNotification() {
  return {
    title: "Study Reminder",
    body: `Don't forget to study today`,
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      vibrate: true,
    },
  };
}
