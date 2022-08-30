import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WorkoutForm, { ExerciseForm } from "../components/WorkoutForm";

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
  const handleFormSubmit = (form: ExerciseForm) => {
    alert(`${form.name} -- ${form.duration}`);
  };
  return (
    <View style={styles.container}>
      <WorkoutForm onSubmit={handleFormSubmit} />
    </View>
  );
};

export default PlannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
