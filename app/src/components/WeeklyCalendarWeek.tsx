import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WeeklyCalendarDay from './WeeklyCalendarDay';

interface Props {
  date: Date;
}

const WeeklyCalendarWeek: React.FC<Props> = ({ date }) => {
  // 월요일 구하는 함수
  const getStartOfWeek = (date: Date) => {
    const startOfWeek = new Date(date);
    const dayOfWeek = startOfWeek.getDay();
    const difference = dayOfWeek >= 1 ? dayOfWeek - 1 : 6; // 월요일과의 차이
    startOfWeek.setDate(startOfWeek.getDate() - difference);
    return startOfWeek;
  };

  // 현재 주의 월요일
  const startOfWeek = getStartOfWeek(date);

  // 일주일 날짜 배열
  const weekDays = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(startOfWeek);
    day.setDate(day.getDate() + index);
    return day;
  });

  return (
    <View style={styles.container}>
      {weekDays.map((day, index) => (
        <WeeklyCalendarDay
          key={index}
          dayTitle={day
            .toLocaleString('en-US', { weekday: 'short' })
            .toUpperCase()}
          dayNum={day.getDate()}
        ></WeeklyCalendarDay>
      ))}
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
