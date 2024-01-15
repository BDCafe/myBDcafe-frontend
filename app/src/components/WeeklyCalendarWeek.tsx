import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WeeklyCalendarDay from './WeeklyCalendarDay';

const WeeklyCalendarWeek = () => {
  return (
    <View style={styles.container}>
      <WeeklyCalendarDay
        dayTitle={'MON'}
        dayNum={29}
      ></WeeklyCalendarDay>
      <WeeklyCalendarDay
        dayTitle={'TUE'}
        dayNum={30}
      ></WeeklyCalendarDay>
      <WeeklyCalendarDay
        dayTitle={'WEN'}
        dayNum={1}
      ></WeeklyCalendarDay>
      <WeeklyCalendarDay
        dayTitle={'THU'}
        dayNum={2}
      ></WeeklyCalendarDay>
      <WeeklyCalendarDay
        dayTitle={'FRI'}
        dayNum={3}
      ></WeeklyCalendarDay>
      <WeeklyCalendarDay
        dayTitle={'SAT'}
        dayNum={4}
      ></WeeklyCalendarDay>
      <WeeklyCalendarDay
        dayTitle={'SUN'}
        dayNum={0o5}
      ></WeeklyCalendarDay>
    </View>
  );
};

export default WeeklyCalendarWeek;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
    paddingHorizontal: 2,
    marginBottom: 2,
  },
});
