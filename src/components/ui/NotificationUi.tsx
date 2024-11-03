import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MessageProps } from "../../interface/interface";

const NotificationComponent = ({
  id,
  user,
  title,
  message,
  type,
  timestamp,
  read,
  file,
}: MessageProps) => {
  return (
    <View>
      <View style={styles.profile_View}>
        <Image
          style={styles.profile_Image}
          source={{
            uri: user.userImage,
          }}
        />
        <View style={styles.info_View}>
          <Text style={styles.publication_Text}>{title}</Text>
          <View style={styles.secundaryInfo_View}>
            {message !== null && (
              <Text style={styles.secundaryInfo_Text}>{message}</Text>
            )}
            {file && (
              <Image
                style={styles.icon_Image}
                source={{
                  uri: "https://res.cloudinary.com/ivannavas/image/upload/v1724616611/red_social/icons/hepotoo1ewtwien0vurq.png",
                }}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({
  profile_View: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile_Image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  info_View: {
    marginLeft: 10,
  },
  publication_Text: {
    fontSize: 12,
    fontWeight: "500",
    color: "#ffffff",
  },
  secundaryInfo_View: {
    flexDirection: "row",
    alignItems: "center",
  },
  secundaryInfo_Text: {
    fontSize: 10,
    fontWeight: "500",
    color: "#7D7D7D",
  },
  icon_Image: {
    width: 10,
    height: 10,
  },
});
