import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import HeaderComponent from "../components/ui/HeaderUi";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PublicationComponent from "../components/ui/PublicationUi";
import { data } from "../helpers/dataTest";

const FeedScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <HeaderComponent />
      <View style={styles.publicationsContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View key={item.id}>
              <PublicationComponent
                id={item.id}
                profileImage={item.profileImage}
                userName={item.userName}
                userNickName={item.userNickName}
                datePublication={item.datePublication}
                publicationTitle={item.publicationTitle}
                imagePublication={item.imagePublication}
                comment={item.comment}
                share={item.share}
                like={item.like}
                view={item.view}
              />
              <View style={styles.separatorPublication}></View>
            </View>
          )}
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
    paddingLeft: 16,
    paddingRight: 16,
  },
  publicationsContainer: {
    backgroundColor: "#2f2f2f",
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 16,
  },
  separatorPublication: {
    flex: 1,
    height: 1,
    backgroundColor: "#1f1f1f",
    marginVertical: 35,
  },
});
