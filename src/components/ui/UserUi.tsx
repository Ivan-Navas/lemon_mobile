import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { auth } from "../../helpers/dataTest";
import { LinearGradient } from "expo-linear-gradient";
import UserButtonComponet from "./buttons/UserButtonUi";
import UserStatComponent from "./UserStatUi";

const UserComponent = () => {
  return (
    <View>
      <View style={styles.user_View}>
        <LinearGradient
          style={styles.border_LinearGradient}
          colors={["#87DBFF", "#EAC7FF"]}
        >
          <Image style={styles.user_Image} source={{ uri: auth.userImage }} />
        </LinearGradient>
        <Text style={styles.nickName_Text}>ivanrng</Text>
      </View>
      <Text style={styles.bio_Text}>1. print("¡Hola mundo!")</Text>
      <View style={styles.buttons_View}>
        <UserButtonComponet width={84} text="Seguir" image="follow" />
        <UserButtonComponet
          width={114}
          text="Publicaciones"
          image="publication"
        />
        <UserButtonComponet width={100} text="Compartir" image="share" />
      </View>
      <LinearGradient
        style={styles.separator_LinearGradient}
        colors={["#87DBFF", "#EAC7FF"]}
        start={[0, 0]}
        end={[1, 1]}
      ></LinearGradient>
      <View>
        <UserStatComponent image="follower" title="Seguidores" value="1" />
        <UserStatComponent image="following" title="Siguiendo" value="8" />
        <UserStatComponent
          image="publication"
          title="Publicaciones"
          value="1"
        />
        <UserStatComponent image="time" title="Se unió" value="02/09/2023" />
      </View>
      <LinearGradient
        style={styles.separator_LinearGradient}
        colors={["#87DBFF", "#EAC7FF"]}
        start={[0, 0]}
        end={[1, 1]}
      ></LinearGradient>
    </View>
  );
};

export default UserComponent;

const styles = StyleSheet.create({
  user_View: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  border_LinearGradient: {
    width: 72,
    height: 72,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  user_Image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  nickName_Text: {
    marginTop: 7,
    fontSize: 30,
    fontWeight: "900",
    color: "#F2F2F2",
  },
  bio_Text: {
    padding: 8,
    fontSize: 14,
    fontWeight: "300",
    color: "#F2F2F2",
  },
  buttons_View: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 28,
  },
  separator_LinearGradient: {
    width: "100%",
    height: 1,
    marginTop: 23,
    marginBottom: 17,
  },
});
