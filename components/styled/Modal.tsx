import {
  Modal as ReactModal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FunctionComponent, useState } from "react";
import PressableText from "../PressableText";

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children?: React.ReactNode;
};

const Modal = ({ activator: Activator, children }: ModalProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <ReactModal
        visible={isModalVisible}
        transparent={false}
        animationType={"fade"}
      >
        <View style={styles.centerView}>
          <View style={styles.closeView}>{children}</View>

          <PressableText onPress={() => setModalVisible(false)} text="close" />
        </View>
      </ReactModal>
      {Activator ? (
        <Activator handleOpen={() => setModalVisible(true)} />
      ) : (
        <PressableText onPress={() => setModalVisible(true)} text="Open" />
      )}
    </>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeView: {
    marginBottom: 20,
  },
});
