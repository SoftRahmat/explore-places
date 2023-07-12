import React from "react";
import { List } from "antd";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const searchResults = useSelector((state) => state.autocomplete.results);

  return (
    <div>
      <List
        dataSource={searchResults}
        renderItem={(result) => <List.Item>{result.description}</List.Item>}
      />
    </div>
  );
};

export default SearchResult;
