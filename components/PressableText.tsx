import { Text, Pressable, PressableProps } from "react-native";
import React from "react";

const PressableText = (props: PressableProps & { text: string }) => {
  return (
    <Pressable {...props}>
      <Text
        style={{
          textDecorationLine: "underline",
        }}
      >
        {props.text}
      </Text>
    </Pressable>
  );
};

export default PressableText;
