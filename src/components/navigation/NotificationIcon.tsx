import React from "react";
import { StyleSheet, View, Image } from "react-native";

const NotificationIcon = ({ focused }: any) => {
  return (
    <View
      style={[
        styles.main_View,
        {
          backgroundColor: focused ? "rgba(255,255,255,0.2)" : "#2f2f2f",
          borderRadius: 100,
        },
      ]}
    >
      <Image
        style={styles.icon_Image}
        source={require("../../../assets/icons/notificationIcon.png")}
      />
    </View>
  );
};

export default NotificationIcon;

const styles = StyleSheet.create({
  main_View: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  icon_Image: {
    width: 20,
    height: 20,
  },
});
