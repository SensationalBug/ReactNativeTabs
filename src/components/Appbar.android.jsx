import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import StyledText from "./StyledText";
import { Link, useLocation } from "react-router-native";

const AppBar = () => {
  const AppBarTab = ({ to, children }) => {
    const { pathname } = useLocation();
    const active = pathname === to;

    const textStyles = [styles.text, active && styles.active];

    return (
      <Link to={to} style={styles.tab} component={TouchableOpacity}>
        <StyledText title bold style={textStyles}>
          {children}
        </StyledText>
      </Link>
    );
  };

  return (
    <View style={styles.nav}>
      <StatusBar barStyle={"default"} backgroundColor="#749ec2" />
      <ScrollView style={styles.scrollView} horizontal={true}>
        <AppBarTab to="/">SignIn</AppBarTab>
        <AppBarTab to="/home">Home</AppBarTab>
        <AppBarTab to="/tab3">Tab 3</AppBarTab>
        <AppBarTab to="/tab4">Tab 4</AppBarTab>
        <AppBarTab to="/tab5">Tab 5</AppBarTab>
        <AppBarTab to="/tab6">Tab 6</AppBarTab>
        <AppBarTab to="/tab7">Tab 7</AppBarTab>
        <AppBarTab to="/tab8">Tab 8</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    width: "100%",
  },
  tab: {
    width: 100,
  },
  active: {
    color: "#fff",
  },
  text: {
    color: "#aaa",
    backgroundColor: "#749ec2",
  },
});

export default AppBar;
