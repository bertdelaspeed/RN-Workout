import { Text } from "react-native";
import React from "react";

const MontserratText = (props: Text["props"]) => {
  return <Text {...props} style={{ fontFamily: "montserrat" }} />;
};

export default MontserratText;
