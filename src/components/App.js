import React from "react";
import AutocompleteInput from "./AutocompleteInput";
import Map from "./Map";
import SearchHistory from "./SearchHistory";
import { Layout } from "antd";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <h1 style={{ color: "white" }}>Place Search</h1>
      </Header>
      <Content style={{ padding: "20px" }}>
        <AutocompleteInput />
        <Map />
        <SearchHistory />
      </Content>
    </Layout>
  );
};

export default App;
