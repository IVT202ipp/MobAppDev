import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

export const Profile = () => {
  const backgroundColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(backgroundColor, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(backgroundColor, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const bg = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'blue'],
  });

  return (
      <Animated.View style={[styles.container, { backgroundColor: bg }]} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});