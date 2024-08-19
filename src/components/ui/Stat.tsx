import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

interface Props {
  image: string;
  value: number;
}

const Stat = ({ image, value }: Props) => {
  return (
    <View style={styles.statContainer}>
      <Pressable>
        <Image
          style={styles.imageStat}
          source={{
            uri: image,
          }}
        />
      </Pressable>
      <Text style={styles.statNumber}>{value}</Text>
    </View>
  );
};

export default Stat;

const styles = StyleSheet.create({
  statContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageStat: {
    width: 15,
    height: 15,
  },
  statNumber: {
    fontSize: 10,
    fontWeight: "500",
    color: "#ffffff",
  },
  like: {
    fontSize: 10,
    fontWeight: "500",
    color: "#FF458F",
  },
});
