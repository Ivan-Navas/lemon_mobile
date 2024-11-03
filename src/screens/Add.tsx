import React from "react";
import { View, StyleSheet, TextInput, Image, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderComponent from "../components/ui/HeaderUi";
import { useScreenDimensions } from "../helpers/Dimension";
import { auth } from "../helpers/dataTest";

const AddScreen = () => {
  const { height } = useScreenDimensions();

  const inset = useSafeAreaInsets();
  return (
    <View style={[styles.main_View, { paddingTop: inset.top }]}>
      <HeaderComponent />
      <View style={[styles.add_View, { height: height * 0.78 }]}>
        <View style={styles.publication_View}>
          <Image style={styles.user_Image} source={{ uri: auth.userImage }} />
          <TextInput
            style={styles.publication_TextInput}
            numberOfLines={6}
            multiline={true}
            maxLength={300}
            placeholderTextColor={"#7D7D7D"}
            placeholder="¿En que estas pensando?"
          />
        </View>
        <View style={styles.icon_View}>
          <Pressable style={styles.icon_Pressable}>
            <Image
              style={styles.icon_Image}
              source={{
                uri: "https://res.cloudinary.com/ivannavas/image/upload/v1724697337/red_social/icons/add/e8pyyh8vwrgxl3szwdyd.png",
              }}
            />
          </Pressable>
          <Pressable style={styles.icon_Pressable}>
            <Image
              style={styles.icon_Image}
              source={{
                uri: "https://res.cloudinary.com/ivannavas/image/upload/v1724697337/red_social/icons/add/q58hdvvb5cvjdmkystxd.png",
              }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  main_View: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1F1F1F",
    paddingHorizontal: 16,
  },
  add_View: {
    marginTop: 17,
    backgroundColor: "#2F2F2F",
    borderRadius: 16,
    paddingHorizontal: 11,
    paddingVertical: 19,
  },
  publication_View: {
    flexDirection: "row",
  },
  user_Image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  publication_TextInput: {
    flex: 1,
    height: 200,
    padding: 8,
    alignItems: "baseline",
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    textAlignVertical: "top",
  },
  icon_View: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon_Pressable: {
    marginLeft: 13,
  },
  icon_Image: {
    width: 21,
    height: 21,
  },
});
