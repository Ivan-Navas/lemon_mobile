import React from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderComponent from "../components/ui/HeaderUi";
import { useScreenDimensions } from "../helpers/Dimension";
import UserComponent from "../components/ui/UserUi";

const UserScreen = () => {
  const { height } = useScreenDimensions();
  const inset = useSafeAreaInsets();
  return (
    <View style={[styles.main_view, { paddingTop: inset.top }]}>
      <HeaderComponent />
      <View style={[styles.user_View, { height: height * 0.78 }]}>
        <UserComponent />
        <Pressable style={styles.iconButton_Pressable}>
          <Image
            style={styles.iconButton_Image}
            source={require("../../assets/icons/user/settingsIcon.png")}
          />
          <Text style={styles.settings_Text}>Ajustes</Text>
        </Pressable>
        <Pressable style={styles.iconLogOut_Pressable}>
          <Image
            style={styles.iconButton_Image}
            source={require("../../assets/icons/user/logOutIcon.png")}
          />
          <Text style={styles.logOut_Text}>Cerrar sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  main_view: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1F1F1F",
    paddingHorizontal: 16,
    position: "relative",
  },
  user_View: {
    backgroundColor: "#2F2F2F",
    borderRadius: 16,
    marginTop: 17,
  },
  iconButton_Pressable: {
    marginLeft: 8,
    flexDirection: "row",
  },
  iconButton_Image: {
    width: 20,
    height: 20,
  },
  settings_Text: {
    fontSize: 16,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  iconLogOut_Pressable: {
    flexDirection: "row",
    position: "absolute",
    bottom: 19,
    left: 8,
  },
  logOut_Text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
