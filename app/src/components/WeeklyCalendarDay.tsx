import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
  dayTitle: String;
  dayNum: Number;
}

const WeeklyCalendarDay = ({ dayTitle, dayNum }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dayTitle}>{dayTitle}</Text>
      <View style={styles.dayContainer}>
        <Text style={styles.dayNum}>
          {/* for two digit number */}
          {dayNum.toLocaleString(undefined, {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </Text>
      </View>
    </View>
  );
};

export default WeeklyCalendarDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: 2,
  },
  dayContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    height: '100%',
    width: '100%',
    paddingTop: 2,
  },
  dayTitle: {
    fontFamily: 'nanum_square_neo_cbd',
    fontSize: 8,
    color: '#9496A1',
    width: '100%',
    textAlign: 'center',
    marginBottom: 2,
  },
  dayNum: {
    fontFamily: 'nanum_square_neo_deb',
    fontSize: 12,
    color: '#000000',
    width: '100%',
    textAlign: 'center',
  },
});
