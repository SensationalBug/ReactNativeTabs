import { useState, useEffect } from "react";

const useRepos = () => {
  const [repos, setRepos] = useState(null);

  const reposList = async () => {
    const response = await global
      .fetch("http://192.168.3.177:5000/api/repositories")
      .then((json) => json.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    reposList();
  }, []);

  const nodes = repos ? repos.edges.map((res) => res.node) : [];

  return nodes;
};

export default useRepos;
