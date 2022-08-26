import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    textTransform: "capitalize",
  },
  text: {
    fontSize: 15,
  },
  bold: {
    fontWeight: "bold",
  },
  small: {
    fontSize: 10,
  },
  big: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  padding: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  textWhite: {
    color: "#fafafa",
  },
});

const StyledText = ({
  big,
  bold,
  small,
  style,
  title,
  padding,
  children,
  textWhite,
}) => {
  const textStyles = [
    style,
    styles.text,
    big && styles.big,
    bold && styles.bold,
    title && styles.title,
    small && styles.small,
    padding && styles.padding,
    textWhite && styles.textWhite,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

export default StyledText;
