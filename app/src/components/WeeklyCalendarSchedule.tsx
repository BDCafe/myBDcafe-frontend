import { ColorValue, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
  scheduleTitle: String;
  startDate: Date;
  endDate: Date;
  backgroundColor?: ColorValue;
  dayContainerWidth: number;
}

const WeeklyCalendarSchedule: React.FC<Props> = ({
  scheduleTitle,
  startDate,
  endDate,
  backgroundColor,
  dayContainerWidth,
}) => {
  //console.log(`dayContainerWidth: ${dayContainerWidth}`);
  //console.log(`start: ${startDate.getDay()}, end: ${endDate.getDay()}`);

  const PADDING_BETWEEN_DAY = 4;

  let left = 0;
  let right = 0;

  if (startDate.getDay() > 0) {
    left = (startDate.getDay() - 1) * (dayContainerWidth + PADDING_BETWEEN_DAY);
  } else {
    left = 6 * (dayContainerWidth + PADDING_BETWEEN_DAY);
  }

  if (endDate.getDay() > 0) {
    right = (7 - endDate.getDay()) * (dayContainerWidth + PADDING_BETWEEN_DAY);
  }

  //console.log(`left: ${left}, right: ${right}`);

  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        height: 16,
        borderRadius: 3,
        backgroundColor: backgroundColor || 'rgba(125,0,125,0.5)',
        justifyContent: 'center',
        left: left,
        right: right,
        top: 0,
      }}
    >
      <Text style={styles.title}>{scheduleTitle}</Text>
    </View>
  );
};

export default WeeklyCalendarSchedule;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'nanum_square_neo_cbd',
    fontSize: 8,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
});
