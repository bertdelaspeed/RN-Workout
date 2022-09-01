import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { SequenceItem } from "../types/data";

const ExerciseItem = ({
  item,
  children,
}: {
  item: SequenceItem;
  children?: ReactNode;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {item.name}
        {item.reps ? `-${item.reps}` : ""}-{item.duration} sec | {item.type}
      </Text>
      {children}
    </View>
  );
};

export default ExerciseItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 15,
    marginBottom: 5,
  },
});
