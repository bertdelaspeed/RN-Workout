import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import PressableText from "./PressableText";
import { useForm, Controller } from "react-hook-form";

export type WorkoutFormType = {
  name: string;
  duration: string;
  type: string;
  reps?: string;
};

type WorkoutProps = { onSubmit: (form: WorkoutFormType) => void };

const WorkoutForm = ({ onSubmit }: WorkoutProps) => {
  const { control, handleSubmit } = useForm();
  const [isSelectionOn, setIsSelectionOn] = useState(false);
  const selectionItems = ["Exercise", "Break", "Stretch"];
  //   console.log(isSelectionOn);

  return (
    <View style={styles.container}>
      {/* <Text>Custom Workout </Text> */}
      <View>
        <View style={styles.rowContainer}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={"rgba(0,0,0,0.4)"}
              />
            )}
          />

          <Controller
            control={control}
            rules={{ required: true }}
            name="duration"
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholder="Duration"
                placeholderTextColor={"rgba(0,0,0,0.4)"}
              />
            )}
          />
        </View>
        <View style={styles.rowContainer}>
          <Controller
            control={control}
            name="reps"
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholder="Repetitions"
                placeholderTextColor={"rgba(0,0,0,0.4)"}
              />
            )}
          />
          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <View>
                {isSelectionOn ? (
                  <View>
                    {selectionItems.map((selection) => (
                      <PressableText
                        key={selection}
                        text={selection}
                        onPressIn={() => {
                          onChange(selection);
                          setIsSelectionOn(false);
                        }}
                        style={styles.selection}
                      />
                    ))}
                  </View>
                ) : (
                  <TextInput
                    onPressIn={() => setIsSelectionOn(true)}
                    style={styles.input}
                    value={value}
                    placeholder="Type"
                    placeholderTextColor={"rgba(0,0,0,0.4)"}
                  />
                )}
              </View>
            )}
          />
        </View>
        <PressableText
          text="Add exercise"
          style={{ marginTop: 10 }}
          onPress={handleSubmit((data) => {
            onSubmit(data as WorkoutFormType);
          })}
        />
      </View>
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
    flex: 1,
    margin: 2,
    borderWidth: 1,
    height: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.4)",
  },
  rowContainer: {
    flexDirection: "row",
  },
  selection: {
    margin: 2,
    padding: 3,
    alignSelf: "center",
  },
});
