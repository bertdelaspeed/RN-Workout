import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import PressableText from "./PressableText";
import { useForm, Controller } from "react-hook-form";

export type ExerciseFormType = {
  name: string;
};

type WorkoutProps = { onSubmit: (form: ExerciseFormType) => void };

const ExerciseForm = ({ onSubmit }: WorkoutProps) => {
  const { control, handleSubmit } = useForm();
  //   console.log(isSelectionOn);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: true }}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            style={styles.input}
            placeholder="Exercise name"
            placeholderTextColor={"rgba(0,0,0,0.4)"}
          />
        )}
      />
      <PressableText
        text="Confirm"
        style={{ marginTop: 10 }}
        onPress={handleSubmit((data) => {
          onSubmit(data as ExerciseFormType);
        })}
      />
    </View>
  );
};

export default ExerciseForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    margin: 2,
    borderWidth: 1,
    height: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.4)",
  },
});
