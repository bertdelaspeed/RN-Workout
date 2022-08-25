import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Workout } from "../types/data";
import { formatSec } from "../utils/time";

const WorkoutItem = ({ item }: { item: Workout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>Duration: {formatSec(item.duration)}</Text>
      <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
    </View>
  );
};

export default WorkoutItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "rgba(0,0,255,0.11)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  duration: {
    fontSize: 15,
  },
  difficulty: {
    fontSize: 15,
  },
});
