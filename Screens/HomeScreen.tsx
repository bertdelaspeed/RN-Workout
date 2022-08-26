import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WorkoutItem from "../components/WorkoutItem";
import { useWorkouts } from "../hooks/useWorkouts";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const workouts = useWorkouts();

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
