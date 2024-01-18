import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainAppbar from './src/screens/main/MainAppbar';
import MainFilter from './src/screens/main/MainFilter';
import WeeklyCalendar from './src/screens/main/WeeklyCalendar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Map from './src/screens/main/Map';
import { useState } from 'react';

const styles = StyleSheet.create({});

const App = () => {
  return (
    <SafeAreaProvider>
      <MainAppbar />
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
    </SafeAreaProvider>
  );
};

export default App;
