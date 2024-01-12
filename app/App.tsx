import {View} from '@gluestack-ui/themed';
import {Fragment} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Appbar, Button, IconButton, Text} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const MainAppBar = () => (
  <View>
    <Appbar.Header mode="center-aligned" style={{height: 52}}>
      <Appbar.Action icon="menu" onPress={() => {}} />
      <Appbar.Content
        title="내생카"
        titleStyle={{
          color: '#FD3636',
          fontSize: 15,
          textAlign: 'center',
        }}
      />
    </Appbar.Header>
    <Appbar.Header
      style={{
        justifyContent: 'space-between',
        alignContent: 'center',
      }}>
      <Button
        compact
        style={{borderRadius: 0}}
        contentStyle={{
          flexDirection: 'row-reverse',
        }}
        icon="arrow-down-drop-circle-outline"
        labelStyle={{
          fontSize: 24,
          textAlign: 'center',
          lineHeight: 24,
        }}
        rippleColor="#00000000"
        textColor="black"
        onPress={() => {}}>
        PLAVE
      </Button>
      <IconButton icon="filter" onPress={() => {}} />
    </Appbar.Header>
  </View>
);

const App = () => {
  return (
    <SafeAreaProvider>
      <Fragment>
        <MainAppBar />
      </Fragment>
    </SafeAreaProvider>
  );
};

export default App;
