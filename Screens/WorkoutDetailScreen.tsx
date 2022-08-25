import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

const WorkoutDetailScreen = ({ route }: Navigation) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{route.params.slug}</Text>
    </View>
  );
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "montserrat-bold",
  },
});
