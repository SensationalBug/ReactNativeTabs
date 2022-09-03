import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import RepositoryStats from "./RepositoryStats";
import StyledText from "./StyledText";

const RepositoryItem = (props) => {
  const { id, fullName, description, language, ownerAvatarUrl } = props;

  return (
    <View key={id} style={styles.vista}>
      <View>
        <Image style={styles.imageStyle} source={{ uri: ownerAvatarUrl }} />
        <StyledText textWhite bold style={styles.language}>
          {language}
        </StyledText>
      </View>
      <View style={styles.textSection}>
        <StyledText style={styles.nameStyle} big bold padding>
          {fullName}
        </StyledText>
        <StyledText style={styles.nameStyle} padding>
          {description}
        </StyledText>
        <RepositoryStats {...props} styles={styles} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vista: {
    padding: 15,
    paddingBottom: 5,
    flexDirection: "row",
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  language: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: Platform.select({
      android: "#749ec2",
      ios: "red",
      default: "purple",
    }),
  },
  textSection: {
    justifyContent: "space-between",
    flex: 1,
  },
  nameStyle: {
    textAlign: "justify",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statItem: {
    width: "30%",
    alignItems: "center",
  },
});

export default RepositoryItem;
