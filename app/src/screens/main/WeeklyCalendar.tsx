import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import WeeklyCalendarPanel from '../../components/WeeklyCalendarPanel';
import WeeklyCalendarSchedule from '../../components/WeeklyCalendarSchedule';
import { EventJson, testJson } from '../../model/Event';

interface Props {
  style: ViewStyle;
}

const WeeklyCalendar: React.FC<Props> = ({ style, schedule = testJson }) => {
  return (
    <View style={style}>
      <View style={styles.scheduleContainer}>
        {/* <WeeklyCalendarSchedule /> */}
      </View>
      <WeeklyCalendarPanel />
    </View>
  );
};

export default WeeklyCalendar;

const styles = StyleSheet.create({
  scheduleContainer: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    top: 60,
    bottom: 20,
    left: 2,
    right: 2,
    backgroundColor: 'rgba(0, 125, 255, 0.5)',
  },
});
