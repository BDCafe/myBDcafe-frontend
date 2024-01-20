import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainAppbar from './src/screens/main/MainAppbar';
import MainFilter from './src/screens/main/MainFilter';
import WeeklyCalendar from './src/screens/main/WeeklyCalendar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Map from './src/screens/main/Map';
import { useState } from 'react';
import MainScreen from './src/screens/main/MainScreen';
import MBCBottomNavigation from './src/components/BottomNavigation';

const styles = StyleSheet.create({});

const App = () => {
  return (
    <SafeAreaProvider>
      <MainAppbar />
      <MBCBottomNavigation />
    </SafeAreaProvider>
  );
};

export default App;
