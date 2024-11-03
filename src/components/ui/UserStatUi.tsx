import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

interface Props {
  image: string;
  title: string;
  value: string;
}

const UserStatComponent = ({ image, title, value }: Props) => {
  const followers = "../../../assets/icons/stats/followersIcon.png";
  const following = "../../../assets/icons/stats/followingIcon.png";
  const publications = "../../../assets/icons/stats/publicationsIcon.png";
  const time = "../../../assets/icons/stats/timeIcon.png";

  let link;
  if (image === "follower") {
    link = require(followers);
  }
  if (image === "following") {
    link = require(following);
  }
  if (image === "publication") {
    link = require(publications);
  }
  if (image === "time") {
    link = require(time);
  }

  return (
    <View style={styles.main_View}>
      <View style={styles.left_View}>
        <Image style={styles.icon_Image} source={link} />
        <Text style={styles.title_Text}>{title}</Text>
      </View>
      <View style={styles.right_View}>
        <Text style={styles.value_Text}>{value}</Text>
      </View>
    </View>
  );
};

export default UserStatComponent;

const styles = StyleSheet.create({
  main_View: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  left_View: {
    flexDirection: "row",
  },
  icon_Image: {
    width: 16,
    height: 20,
  },
  title_Text: {
    fontSize: 12,
    fontWeight: "500",
    color: "#9F9F9F",
    marginLeft: 1,
  },
  right_View: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  value_Text: {
    fontSize: 12,
    fontWeight: "500",
    color: "#F3F3F3",
  },
});
