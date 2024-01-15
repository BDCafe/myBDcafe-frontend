import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const INITIAL_PANEL_HEIGHT = 20; // Initial height of the panel (collapsed state)
const MID_PANEL_HEIGHT = 150; // Intermediate height of the panel
const MAX_PANEL_HEIGHT = 300; // Maximum height of the panel (fully expanded state)

const Panel: React.FC = () => {
  const panelHeight = useSharedValue(MID_PANEL_HEIGHT);
  const startHeight2 = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(e => {
      startHeight2.value = panelHeight.value;
    })
    .onChange(e => {
      let newHeight = startHeight2.value + e.translationY;
      panelHeight.value = Math.max(
        INITIAL_PANEL_HEIGHT,
        Math.min(newHeight, MAX_PANEL_HEIGHT),
      );
    })
    .onEnd(() => {
      if (
        panelHeight.value < MID_PANEL_HEIGHT &&
        panelHeight.value >= (INITIAL_PANEL_HEIGHT + MID_PANEL_HEIGHT) / 2
      ) {
        panelHeight.value = withSpring(MID_PANEL_HEIGHT);
      } else if (
        panelHeight.value >= MID_PANEL_HEIGHT &&
        panelHeight.value < (MID_PANEL_HEIGHT + MAX_PANEL_HEIGHT) / 2
      ) {
        panelHeight.value = withSpring(MID_PANEL_HEIGHT);
      } else if (
        panelHeight.value >=
        (MID_PANEL_HEIGHT + MAX_PANEL_HEIGHT) / 2
      ) {
        panelHeight.value = withSpring(MAX_PANEL_HEIGHT);
      } else {
        panelHeight.value = withSpring(INITIAL_PANEL_HEIGHT);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: panelHeight.value,
    };
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.panel, animatedStyle]}>
          <View style={styles.hadle}></View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  panel: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#D2D4DA',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 8,
  },
  hadle: {
    width: 32,
    height: 4,
    backgroundColor: '#9496A1',
  },
});

export default Panel;
