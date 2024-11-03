import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderComponent from "../components/ui/HeaderUi";
import MessageUi from "../components/ui/MessageUi";
import { MessagesTest } from "../helpers/dataTest";
import { date } from "../helpers/date";
import { useScreenDimensions } from "../helpers/Dimension";

const MessageScreen = () => {
  const insets = useSafeAreaInsets();
  const { height } = useScreenDimensions();

  return (
    <View style={[styles.mainContainerView, { paddingTop: insets.top }]}>
      <HeaderComponent />
      <View style={[styles.messagesContainer, { height: height * 0.78 }]}>
        <FlatList
          data={MessagesTest}
          renderItem={(item) => (
            <MessageUi
              key={item.item.userId}
              imageUser={item.item.user.userImage}
              nameUser={item.item.user.nickName}
              iconMessage="https://res.cloudinary.com/ivannavas/image/upload/v1724280948/red_social/icons/messages/fnte7y4hsbfidzjgzmds.png"
              message={item.item.lastMessage}
              timeSend={date()}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  mainContainerView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1f1f1f",
    paddingLeft: 16,
    paddingRight: 16,
  },
  messagesContainer: {
    marginTop: 17,
    paddingVertical: 22,
    paddingLeft: 12,
    paddingRight: 6,
    minHeight: "50%",
    backgroundColor: "#2f2f2f",
    borderRadius: 16,
  },
});
