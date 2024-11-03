import React from "react";
import { StyleSheet, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  text: string;
  image: string;
  width: number;
}

const UserButtonComponet = ({ text, image, width }: Props) => {
  const follow = "../../../../assets/icons/user/followIcon.png";
  const publication = "../../../../assets/icons/user/publicationIcon.png";
  const share = "../../../../assets/icons/user/shareIcon.png";
  let link;
  if (image === "follow") {
    link = require(follow);
  }
  if (image === "publication") {
    link = require(publication);
  }
  if (image === "share") {
    link = require(share);
  }

  return (
    <LinearGradient
      style={[styles.follow_LinearGradient, { width: width }]}
      colors={["#87DBFF", "#EAC7FF"]}
      start={[0, 0]}
      end={[1, 1]}
    >
      <Pressable style={[styles.follow_Pressable, { width: width - 2 }]}>
        <Image style={styles.follow_Image} source={link} />
        <Text style={styles.follow_Text}>{text}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default UserButtonComponet;

const styles = StyleSheet.create({
  follow_LinearGradient: {
    height: 26,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  follow_Pressable: {
    height: 24,
    backgroundColor: "#2F2F2F",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  follow_Image: {
    width: 19,
    height: 15,
  },
  follow_Text: {
    fontSize: 12,
    fontWeight: "900",
    color: "#FFFFFF",
  },
});
