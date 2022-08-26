import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parser = (value) => {
  return value > 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = (props) => {
  const { forksCount, ratingAverage, reviewCount, styles } = props;

  return (
    <View style={styles.stats}>
      <View style={styles.statItem}>
        <StyledText>{parser(forksCount)}</StyledText>
        <StyledText bold>Forks:</StyledText>
      </View>
      <View style={styles.statItem}>
        <StyledText>{parser(ratingAverage)}</StyledText>
        <StyledText bold>Rating:</StyledText>
      </View>
      <View style={styles.statItem}>
        <StyledText>{parser(reviewCount)}</StyledText>
        <StyledText bold>Review:</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
