import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { useEffect, useState } from 'react';
import WeeklyCalendarPanel from '../../components/WeeklyCalendarPanel';
import WeeklyCalendarSchedule from '../../components/WeeklyCalendarSchedule';
import { EventJson, testJson } from '../../model/Event';

interface Props {
  style: ViewStyle;
  schedule: EventJson;
}

const WeeklyCalendar: React.FC<Props> = ({ style, schedule }) => {
  const [dayWidth, setDayWidth] = useState<number | null>(null);
  const handleDayWidthSet = (width: number) => {
    setDayWidth(width);
    console.log(`calendar call: ${width}`);
  };

  return (
    <View style={style}>
      <View style={styles.scheduleContainer}>
        {dayWidth !== null && (
          <WeeklyCalendarSchedule
            scheduleTitle={
              schedule?.content[0].eventName || testJson.content[0].eventName
            }
            startDate={
              schedule?.content[0].startDate!! || testJson.content[0].startDate
            }
            endDate={
              schedule?.content[0].endDate!! || testJson.content[0].endDate
            }
            dayContainerWidth={dayWidth}
          />
        )}
      </View>
      <WeeklyCalendarPanel onDayWidthSet={handleDayWidthSet} />
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
    left: 4,
    right: 4,
    backgroundColor: 'rgba(0, 125, 255, 0.5)',
  },
});
