import {
  Text,
  Pressable,
  PressableProps,
  TextStyle,
  StyleProp,
} from "react-native";
import React from "react";

export type PressableTextProps = PressableProps & {
  text: string;
  style?: StyleProp<TextStyle>;
};

const PressableText = (props: PressableTextProps) => {
  return (
    <Pressable {...props}>
      <Text
        style={[
          props.style,
          {
            textDecorationLine: "underline",
          },
        ]}
      >
        {props.text}
      </Text>
    </Pressable>
  );
};

export default PressableText;
