import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Stat from "./Stat";
import { statIcon } from "../../helpers/statIcon";
import { Publication } from "../../interface/publication";

const PublicationComponent = ({
  id,
  profileImage,
  userName,
  userNickName,
  datePublication,
  publicationTitle,
  imagePublication,
  comment,
  share,
  like,
  view,
}: Publication) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userImageContainer}>
          <Pressable>
            <Image
              style={styles.userImage}
              source={{
                uri: profileImage,
              }}
            />
          </Pressable>
        </View>
        <View style={styles.userPubliContainer}>
          <Text style={styles.userName}>{userName}</Text>
          <View>
            <Text style={styles.publicationData}>
              @{userNickName} | {datePublication}
            </Text>
          </View>
          <Text style={styles.publicationText}>{publicationTitle}</Text>
        </View>
      </View>
      {imagePublication && (
        <Image
          style={styles.publicationImage}
          source={{
            uri: imagePublication,
          }}
        />
      )}

      <View style={styles.statsContainer}>
        <Stat image={statIcon.comment} value={comment} />
        <Stat image={statIcon.share} value={share} />
        <Stat image={statIcon.like} value={like} />
        <Stat image={statIcon.view} value={view} />
      </View>
    </View>
  );
};

export default PublicationComponent;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 11,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImageContainer: {},
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  userPubliContainer: {
    marginLeft: 7,
  },
  userName: {
    fontSize: 12,
    fontWeight: "500",
    color: "#ffffff",
  },
  publicationData: {
    fontSize: 8,
    fontWeight: "500",
    color: "#9f9f9f",
  },
  publicationText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#ffffff",
  },
  publicationImage: {
    minWidth: "100%",
    minHeight: 161,
    marginTop: 15,
    borderRadius: 15,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 13,
  },
});
