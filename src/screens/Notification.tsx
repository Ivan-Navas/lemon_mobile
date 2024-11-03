import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NotificationComponet from "../components/ui/NotificationUi";
import HeaderComponent from "../components/ui/HeaderUi";
import { notificationsTest } from "../helpers/dataTest";
import { useScreenDimensions } from "../helpers/Dimension";

const NotificationScreen = () => {
  const inset = useSafeAreaInsets();
  const { height } = useScreenDimensions();

  return (
    <View style={[styles.main_View, { paddingTop: inset.top }]}>
      <HeaderComponent />
      <View style={[styles.notification_View, { height: height * 0.78 }]}>
        <FlatList
          data={notificationsTest}
          renderItem={({ item }) => (
            <View style={styles.notificationComponent_View}>
              <NotificationComponet
                id={item.id}
                user={item.user}
                title={item.title}
                message={item.message}
                type={item.type}
                timestamp={item.timestamp}
                read={item.read}
                file={item.file}
              />
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 31 }}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  main_View: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1F1F1F",
    paddingHorizontal: 16,
  },
  notification_View: {
    width: "100%",
    marginTop: 17,
    backgroundColor: "#2f2f2f",
    borderRadius: 16,
    paddingHorizontal: 11,
    paddingVertical: 20,
  },
  notificationComponent_View: {
    marginBottom: 16,
  },
});
