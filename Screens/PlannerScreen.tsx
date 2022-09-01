import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WorkoutForm, { WorkoutFormType } from "../components/WorkoutForm";
import { SequenceItem, SequenceType, Workout } from "../types/data";
import slugify from "slugify";
import { FlatList } from "react-native-gesture-handler";
import ExerciseItem from "../components/ExerciseItem";
import PressableText from "../components/PressableText";
import Modal from "../components/styled/Modal";
import ExerciseForm, { ExerciseFormType } from "../components/ExerciseForm";
import { storeWorkout } from "../storage/workout";
import { PressableThemeText } from "../components/styled/PresssableThemeText";

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
  const [seqItem, setSeqItem] = useState<SequenceItem[]>([]);

  const handleFormSubmit = (form: WorkoutFormType) => {
    const sequenceItem: SequenceItem = {
      slug: slugify(form.name + " " + Date.now(), { lower: true }),
      name: form.name,
      type: form.type as SequenceType,
      duration: Number(form.duration),
    };
    if (form.reps) sequenceItem.reps = Number(form.reps);

    setSeqItem([...seqItem, sequenceItem]);
  };

  const computeDifficulty = (
    exercisesCount: number,
    workoutDuration: number
  ) => {
    const intensity = workoutDuration / exercisesCount;
    if (intensity <= 60) {
      return "hard";
    } else if (intensity <= 100) {
      return "normal";
    } else {
      return "easy";
    }
  };

  const handleExerciseSubmit = async (form: ExerciseFormType) => {
    if (seqItem.length > 0) {
      const duration = seqItem.reduce((acc, item) => {
        return acc + item.duration;
      }, 0);

      const workout: Workout = {
        name: form.name,
        slug: slugify(form.name + " " + Date.now(), { lower: true }),
        difficulty: computeDifficulty(seqItem.length, duration),
        sequence: [...seqItem],
        duration,
      };

      await storeWorkout(workout);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={seqItem}
        renderItem={({ item, index }) => (
          <ExerciseItem item={item}>
            <PressableText
              text="remove"
              onPressIn={() => {
                const items = [...seqItem];
                items.splice(index, 1);
                setSeqItem(items);
              }}
            />
          </ExerciseItem>
        )}
        keyExtractor={(item) => item.slug}
      />
      <WorkoutForm onSubmit={handleFormSubmit} />
      <View>
        <Modal
          activator={({ handleOpen }) => (
            <PressableThemeText
              text="Create Workout"
              onPress={handleOpen}
              style={{ marginTop: 15 }}
            />
          )}
        >
          {({ handleClose }) => (
            <View>
              <ExerciseForm
                onSubmit={async (data) => {
                  await handleExerciseSubmit(data);
                  handleClose();
                  navigation.navigate("Home");
                }}
              />
            </View>
          )}
        </Modal>
      </View>
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
