import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
  useEffect(() => {}, []);

  return (
    <View>
      <Text>PlannerScreen</Text>
    </View>
  );
};

export default PlannerScreen;
