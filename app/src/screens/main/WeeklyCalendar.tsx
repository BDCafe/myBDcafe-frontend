import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import WeeklyCalendarPanel from '../../components/WeeklyCalendarPanel';
import WeeklyCalendarSchedule from '../../components/WeeklyCalendarSchedule';
import { EventJson, testJson } from '../../model/Event';

interface Props {
  style: ViewStyle;
  schedule: EventJson;
}

const WeeklyCalendar: React.FC<Props> = ({ style, schedule }) => {
  console.log(schedule);

  const [dayContainerWidth, setDayContainerWidth] = useState<number>(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    const containerWidth = (width - 24) / 7;
    setDayContainerWidth(containerWidth);
  };

  return (
    <View style={style}>
      <View
        style={styles.scheduleContainer}
        onLayout={onLayout}
      >
        <WeeklyCalendarSchedule
          scheduleTitle={schedule?.content[0].eventName || 'error'}
          startDate={schedule?.content[0].startDate!! || 'error'}
          endDate={schedule?.content[0].endDate!! || 'error'}
          dayContainerWidth={dayContainerWidth}
        />
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
    left: 4,
    right: 4,
    backgroundColor: 'rgba(0, 125, 255, 0.5)',
  },
});
