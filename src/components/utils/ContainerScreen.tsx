import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenView = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.mainContainerView, { paddingTop: insets.top }]}></View>
  );
};

export default ScreenView;

const styles = StyleSheet.create({
  mainContainerView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1f1f1f",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
