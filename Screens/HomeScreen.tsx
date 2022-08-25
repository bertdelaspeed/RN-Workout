import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import { getWorkouts } from "../storage/workout";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  useEffect(() => {
    async function getData() {
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    }
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("workoutdetails", { slug: item.slug })
              }
            >
              <WorkoutItem item={item} />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

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
