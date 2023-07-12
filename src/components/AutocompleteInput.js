import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import { searchPlaces } from "../actions/autocompleteActions";

const { Search } = Input;

const AutocompleteInput = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    dispatch(searchPlaces(value));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Search
        placeholder="Search places"
        onSearch={handleSearch}
        onChange={handleChange}
        value={searchText}
        enterButton
      />
    </div>
  );
};

export default AutocompleteInput;
