import React from "react";
import { Text, FlatList } from "react-native";
import data from "../data/repositories";
import RepositoryItem from "./RepositryItem";

const RepositoryList = () => {
  return (
    <FlatList
      data={data}
      // horizontal={true}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    />
  );
};

export default RepositoryList;
