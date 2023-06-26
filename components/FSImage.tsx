import React from 'react';
import { Modal, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export const FSImage = ({ isVisible, imageUri, closeModal }) => {
  const scale = useSharedValue(1);
  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
    },
    onEnd: () => {
      scale.value = withSpring(1);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Modal visible={isVisible} onRequestClose={closeModal}>
      <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
        <PinchGestureHandler onGestureEvent={pinchHandler}>
          <Animated.Image
            source={{ uri: imageUri }}
            style={[styles.fullscreenImage, animatedStyle]}
            resizeMode="contain"
          />
        </PinchGestureHandler>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width,
    height,
  },
});