import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Image, Pressable, TextInput } from "react-native";
import { auth } from "../../helpers/dataTest";

const HeaderComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["#87DBFF", "#EAC7FF"]}
        style={styles.borderGradient}
      >
        <Pressable>
          <Image
            style={styles.imageProfile}
            source={{
              uri: auth.userImage,
            }}
          />
        </Pressable>
      </LinearGradient>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          placeholderTextColor={"#fff"}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    paddingTop: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  borderGradient: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 100,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 6,
    backgroundColor: "#2f2f2f",
    borderRadius: 16,
  },
  input: {
    marginLeft: 18,
    fontSize: 12,
    fontWeight: "500",
    height: 37,
    color: "#ffffff",
  },
});
