import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withClamp,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import WeeklyCalendarWeek from './WeeklyCalendarWeek';

const INITIAL_PANEL_HEIGHT = 20; // Initial height of the panel (collapsed state)
const MID_PANEL_HEIGHT = 150; // Intermediate height of the panel
const MAX_PANEL_HEIGHT = 300; // Maximum height of the panel (fully expanded state)

const WeeklyCalendarPanel = () => {
  const panelHeight = useSharedValue(MID_PANEL_HEIGHT);
  const startHeight = useSharedValue(INITIAL_PANEL_HEIGHT);

  const date = new Date();

  const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${getWeek(date)}주`;
  const [weekDay, setWeekDay] = useState(formattedDate);

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
        panelHeight.value = withSpring(INITIAL_PANEL_HEIGHT);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withClamp({ min: 20 }, withSpring(panelHeight.value)),
    };
  });

  return (
    <Animated.View style={[styles.panel, animatedStyle]}>
      <View style={styles.weeklyContainer}>
        <Text style={styles.weekTitle}>{weekDay}</Text>
        <WeeklyCalendarWeek date={date} />
      </View>
      <GestureDetector gesture={panGesture}>
        <PanelHandle />
      </GestureDetector>
    </Animated.View>
  );
};

const getWeek = (date: Date) => {
  const newDate = new Date(date);
  const currentDate = date.getDate();
  const firstDayOfMonth = new Date(
    newDate.getFullYear(),
    newDate.getMonth(),
    1,
  );
  let firstDay = firstDayOfMonth.getDay();

  //월요일 시작
  firstDay = firstDay === 0 ? -1 : firstDay - 1;

  return Math.ceil((currentDate + firstDay) / 7);
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
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  panel: {
    flex: 1,
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

export default WeeklyCalendarPanel;
