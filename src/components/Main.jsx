import React from "react";
import AppBar from "./Appbar";
import RepositoryList from "./RepositoryList.jsx";
import { Route, Routes } from "react-router-native";
import { View, StyleSheet, Text } from "react-native";
import Login from "./Login";

// Forma para cargar componentes para diferentes plataformas
// Se recomienda hacerlo para librerias
// const AppBar = Platform.select({
//   web: () => require("./WebAppBar.jsx").default,
//   default: () => require("./Appbar.jsx").default,
// })();

const Main = () => {
  return (
    <View style={styles.container}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<RepositoryList />}></Route>
        <Route
          exact
          path="/tab3"
          element={<Text style={{ flex: 1 }}>Working on it 3!!!</Text>}
        />
        <Route
          exact
          path="/tab4"
          element={<Text style={{ flex: 1 }}>Working on it 4!!!</Text>}
        />
        <Route
          exact
          path="/tab5"
          element={<Text style={{ flex: 1 }}>Working on it 5!!!</Text>}
        />
        <Route
          exact
          path="/tab6"
          element={<Text style={{ flex: 1 }}>Working on it 6!!!</Text>}
        />
        <Route
          exact
          path="/tab7"
          element={<Text style={{ flex: 1 }}>Working on it 7!!!</Text>}
        />
        <Route
          exact
          path="/tab8"
          element={<Text style={{ flex: 1 }}>Working on it 8!!!</Text>}
        />
      </Routes>
      <AppBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
