import React from "react";
import useRepos from "../hooks/useRepos";
import RepositoryItem from "./RepositryItem";
import { Text, FlatList } from "react-native";

const RepositoryList = () => {
  const reposInfo = useRepos();
  return (
    <FlatList
      data={reposInfo}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    />
  );
};

export default RepositoryList;
