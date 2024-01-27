import { StyleSheet } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainFilter from './MainFilter';
import WeeklyCalendar from './WeeklyCalendar';
import Map from './Map';
import MBCFab from './Fab';
import { testJson } from '../../model/Event';

const MainScreen = () => {
  const testData = testJson;
  //console.log(testData);

  return (
    <>
      <MainFilter />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <WeeklyCalendar
          style={{
            position: 'absolute',
            zIndex: 1,
          }}
          schedule={testData}
        />
        <Map style={{ flex: 1 }} />
      </GestureHandlerRootView>
      <MBCFab />
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
