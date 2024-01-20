import { StyleSheet } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainFilter from './MainFilter';
import WeeklyCalendar from './WeeklyCalendar';
import Map from './Map';
import MBCFab from './Fab';

const MainScreen = () => {
  return (
    <>
      <MainFilter />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <WeeklyCalendar
          style={{
            position: 'absolute',
            zIndex: 1,
          }}
        />
        <Map style={{ flex: 1 }} />
      </GestureHandlerRootView>
      <MBCFab />
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
