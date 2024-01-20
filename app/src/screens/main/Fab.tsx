import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FAB } from 'react-native-paper';

const MBCFab = () => {
  return (
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => {}}
    />
  );
};

export default MBCFab;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 100,
    backgroundColor: '#FD3636',
  },
});
