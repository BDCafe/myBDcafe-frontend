import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainAppbar from './src/screens/main/MainAppbar';
import MainFilter from './src/screens/main/MainFilter';
import WeeklyCalendar from './src/screens/main/WeeklyCalendar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({});

const App = () => {
  return (
    <SafeAreaProvider>
      <MainAppbar />
      <MainFilter />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <WeeklyCalendar />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
