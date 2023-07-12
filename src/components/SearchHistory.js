import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";

const SearchHistory = () => {
  const searchHistory = useSelector((state) => state.search.history);

  return (
    <Card title="Search History">
      <ul>
        {searchHistory.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </Card>
  );
};

export default SearchHistory;
