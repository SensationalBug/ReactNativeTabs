import React from "react";
import { StyleSheet, TextInput } from "react-native";

const StyledTextInput = ({ style = {}, error, ...props }) => {
  const inputStyle = [styles.texInput, style, error && styles.error];
  return <TextInput style={inputStyle} {...props} />;
};

const styles = StyleSheet.create({
  texInput: {
    zIndex: 0,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    borderColor: "#999",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  error: {
    borderColor: "red",
  },
});

export default StyledTextInput;
