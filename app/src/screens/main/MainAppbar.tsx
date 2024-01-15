import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Appbar } from 'react-native-paper';

const MainAppbar = () => {
  return (
    <Appbar.Header
      mode="center-aligned"
      style={styles.appBarContainer}
    >
      <Appbar.Action
        icon="menu"
        onPress={() => {}}
      />
      <Appbar.Content
        title="내생카"
        titleStyle={styles.titleStyle}
      />
    </Appbar.Header>
  );
};

export default MainAppbar;

const styles = StyleSheet.create({
  appBarContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    height: 52,
  },

  titleStyle: {
    fontFamily: 'nanum_square_neo_deb',
    fontSize: 15,
    color: '#FD3636',
  },
});
