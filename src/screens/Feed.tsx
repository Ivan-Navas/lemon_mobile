import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import HeaderComponent from "../components/ui/HeaderUi";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PublicationComponent from "../components/ui/PublicationUi";
import { useScreenDimensions } from "../helpers/Dimension";
import { FeedRequest, Post } from "../types/publication";
import { useAppContext } from "../context";

const FeedScreen = () => {
  const insets = useSafeAreaInsets();
  const { height } = useScreenDimensions();
  // const [feed, setFeed] = useState<Post[]>([]);
  const { feed } = useAppContext();

  function formatDate(date: Date) {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <HeaderComponent />
      <View style={[styles.publicationsContainer, { height: height * 0.78 }]}>
        <FlatList
          data={feed}
          renderItem={({ item }) => (
            <View key={item.id}>
              <PublicationComponent
                id={item.id}
                profileImage={item.author.image}
                userName={item.author.name}
                userNickName={item.author.nickName}
                datePublication={formatDate(new Date(item.date))}
                publicationTitle={item.data}
                imagePublication={item.image}
                comment={item.comment.length}
                share={item.share.length}
                like={item.like.length}
                view={item.view.length}
              />
              <View style={styles.separatorPublication}></View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1f1f1f",
    paddingHorizontal: 16,
  },
  publicationsContainer: {
    backgroundColor: "#2f2f2f",
    paddingVertical: 20,
    marginTop: 17,
    borderRadius: 16,
  },
  separatorPublication: {
    flex: 1,
    height: 1,
    backgroundColor: "#1f1f1f",
    marginVertical: 35,
  },
});
