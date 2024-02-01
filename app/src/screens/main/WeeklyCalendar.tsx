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
import { EventJson } from '../../model/Event';

interface Props {
  style: ViewStyle;
  schedule: EventJson;
}

const WeeklyCalendar: React.FC<Props> = ({ style, schedule }) => {
  //console.log(schedule);

  //dayContainer 가로 길이 설정용
  const [dayContainerWidth, setDayContainerWidth] = useState<number>(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    const containerWidth = (width - 24) / 7;
    setDayContainerWidth(containerWidth);
  };

  //패널 최대 확장 상태
  const [isPanelExtended, setIsPanelExtended] = useState<Boolean>(false);

  const scheduleList = () => {
    const { content } = schedule;

    if (!content) {
      return <Text>error</Text>;
    }

    // Determine the number of items to render
    const numberOfItems = isPanelExtended
      ? content.length
      : Math.min(content.length, 4);

    // Render the items
    return content.slice(0, numberOfItems).map((item, index) => (
      <WeeklyCalendarSchedule
        key={index} // Use a unique key for each item
        scheduleTitle={item.eventName}
        startDate={item.startDate!!}
        endDate={item.endDate!!}
        dayContainerWidth={dayContainerWidth}
      />
    ));
  };

  return (
    <View style={style}>
      <View
        style={styles.scheduleContainer}
        onLayout={onLayout}
      >
        {}
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
