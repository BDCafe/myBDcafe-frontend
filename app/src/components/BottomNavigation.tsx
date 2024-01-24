import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { BottomNavigation, TouchableRipple } from 'react-native-paper';
import MainScreen from '../screens/main/MainScreen';
import IconCircleDown from '../assets/expand_circle_down.svg';

/*
TODO: react-navigation으로 변경 예정
*/

const MBCBottomNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'main',
      title: '홈',
      focusedIcon: 'map',
      unfocusedIcon: 'map-outline',
    },
    {
      key: 'calendar',
      title: '달력',
      focusedIcon: 'calendar-blank',
      unfocusedIcon: 'calendar-blank-outline',
    },
    {
      key: 'event',
      title: '행사',
      focusedIcon: 'cake-variant',
      unfocusedIcon: 'cake-variant-outline',
    },
    {
      key: 'account',
      title: '계정',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
  ]);

  const renderScreen = BottomNavigation.SceneMap({
    main: MainScreen,
    calendar: () => <Text>calendar</Text>,
    event: () => <Text>event</Text>,
    account: () => <Text>account</Text>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScreen}
      barStyle={{
        backgroundColor: '#ffffff',
        //height: 52,
        //justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 5,
      }}
      //   renderIcon={({ route }) => {
      //     return (
      //       <IconCircleDown
      //         width={10}
      //         height={10}
      //         style={{ backgroundColor: '#000000' }}
      //       />
      //     );
      //   }}
      renderLabel={({ route, focused }) => {
        return (
          <Text
            style={{
              fontFamily: 'nanum_square_neo_deb',
              fontSize: 10,
              textAlign: 'center',
              color: focused ? '#FD3636' : '#D2D4DA',
            }}
          >
            {route.title}
          </Text>
        );
      }}
      activeColor="#FD3636"
      activeIndicatorStyle={{ backgroundColor: 'transparent' }}
    />
  );
};

export default MBCBottomNavigation;

const styles = StyleSheet.create({});
