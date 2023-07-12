import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";

const Map = () => {
  const selectedPlace = useSelector(
    (state) => state.autocomplete.selectedPlace
  );

  return (
    <Card title="Selected Place" style={{ marginBottom: "20px" }}>
      <p>{selectedPlace ? selectedPlace.description : "No place selected"}</p>
    </Card>
  );
};

export default Map;
