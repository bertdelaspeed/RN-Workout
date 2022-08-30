import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import PressableText from "./PressableText";

export type ExerciseForm = {
  name: string;
  duration: string;
};

type WorkoutProps = { onSubmit: (form: ExerciseForm) => void };

const WorkoutForm = ({ onSubmit }: WorkoutProps) => {
  const [form, setForm] = useState({
    name: "",
    duration: "",
  });

  const onChangeText = (name: string) => (text: string) => {
    setForm({
      ...form,
      [name]: text,
    });
  };

  return (
    <View style={styles.container}>
      <Text>WorkoutForm</Text>
      <TextInput
        value={form.name}
        style={styles.input}
        onChangeText={onChangeText("name")}
      />
      <TextInput
        value={form.duration}
        style={styles.input}
        onChangeText={onChangeText("duration")}
      />
      <PressableText text="submit" onPress={() => onSubmit(form)} />
    </View>
  );
};

export default WorkoutForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
