import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getWorkoutBySlug } from "../storage/workout";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

const WorkoutDetailScreen = ({ route }: Navigation) => {
  const workout = useWorkoutBySlug(route.params.slug);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout?.name}</Text>
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
