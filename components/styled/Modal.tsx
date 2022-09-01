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
  children: FunctionComponent<{
    handleOpen: () => void;
    handleClose: () => void;
  }>;
};

const Modal = ({ activator: Activator, children }: ModalProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpen = () => {
    setModalVisible(true);
  };
  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <ReactModal
        visible={isModalVisible}
        transparent={false}
        animationType={"fade"}
      >
        <View style={styles.centerView}>
          <View style={styles.closeView}>
            {children({ handleOpen, handleClose })}
          </View>

          <PressableText onPress={handleClose} text="close" />
        </View>
      </ReactModal>
      {Activator ? (
        <Activator handleOpen={handleOpen} />
      ) : (
        <PressableText onPress={handleOpen} text="Open" />
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
