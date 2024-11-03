import React from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AddIcon = ({ focused }: any) => {
  return (
    <View style={styles.main_View}>
      <ImageBackground
        source={require("../../../assets/icons/imageBack.png")}
        style={styles.back_ImageBackground}
      >
        <LinearGradient
          colors={["#87DBFF", "#EAC7FF"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.main_Gradient}
        >
          <Image
            style={styles.icon_Image}
            source={require("../../../assets/icons/addIcon.png")}
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default AddIcon;

const styles = StyleSheet.create({
  main_View: {
    width: 76,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  back_ImageBackground: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 76,
    height: 34,
    top: -1,
  },
  main_Gradient: {
    width: 36,
    height: 36,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -6,
  },
  icon_Image: {
    width: 30,
    height: 30,
  },
});
