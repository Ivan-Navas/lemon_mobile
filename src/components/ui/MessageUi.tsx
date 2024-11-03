import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

interface Props {
  imageUser: string;
  nameUser: string;
  iconMessage: string;
  timeSend: string;
  message: string;
}

const MessageUi = ({
  imageUser,
  nameUser,
  iconMessage,
  timeSend,
  message,
}: Props) => {
  return (
    <Pressable style={styles.messageMainContainer}>
      <Image
        style={styles.imageProfile}
        source={{
          uri: imageUser,
        }}
      />
      <View style={styles.infoMessageContainer}>
        <View>
          <View>
            <Text style={styles.userName}>{nameUser}</Text>
            <View style={styles.messageContainer}>
              <Image source={{ uri: iconMessage }} style={styles.iconMessage} />
              <View>
                <Text
                  style={styles.message}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {message}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.infoTimeContainer}>
          <Text style={styles.timeMessage}>{timeSend}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MessageUi;

const styles = StyleSheet.create({
  messageMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  infoMessageContainer: {
    flexDirection: "row",
    marginLeft: 12,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconMessage: {
    width: 19,
    height: 11,
  },
  message: {
    fontSize: 10,
    fontWeight: "500",
    color: "#FFFFFF",
    width: 150,
  },
  infoTimeContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  timeMessage: {
    fontSize: 9,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
