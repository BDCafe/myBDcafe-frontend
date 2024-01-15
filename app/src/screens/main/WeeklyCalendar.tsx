import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withClamp,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import WeeklyCalendarWeek from '../../components/WeeklyCalendarWeek';

const INITIAL_PANEL_HEIGHT = 0; // Initial height of the panel (collapsed state)
const MID_PANEL_HEIGHT = 150; // Intermediate height of the panel
const MAX_PANEL_HEIGHT = 300; // Maximum height of the panel (fully expanded state)

const Panel: React.FC = () => {
  const panelHeight = useSharedValue(MID_PANEL_HEIGHT);
  const startHeight = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(e => {
      startHeight.value = panelHeight.value;
    })
    .onChange(e => {
      let newHeight = startHeight.value + e.translationY;
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
        panelHeight.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: panelHeight.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.panel, animatedStyle]}>
        <View style={styles.weeklyContainer}>
          <Text style={styles.weekTitle}>2024년 2월 1주</Text>
          <WeeklyCalendarWeek></WeeklyCalendarWeek>
        </View>
        <GestureDetector gesture={panGesture}>
          <PanelHandle />
        </GestureDetector>
      </Animated.View>
    </View>
  );
};

const PanelHandle = () => {
  return (
    <View style={styles.handleBody}>
      <View style={styles.hadle}></View>
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
    flex: 0,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'flex-start',
    backgroundColor: '#F3F4F8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  weeklyContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  hadle: {
    width: 32,
    height: 4,
    backgroundColor: '#9496A1',
    borderRadius: 50,
    marginBottom: 8,
  },
  handleBody: {
    width: '100%',
    height: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F3F4F8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  weekTitle: {
    fontFamily: 'nanum_square_neo_deb',
    fontSize: 16,
    color: '#5B5D6B',
    marginTop: 4,
    marginBottom: 8,
  },
});

export default Panel;
