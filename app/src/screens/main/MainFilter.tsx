import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from '@rneui/themed';
import IconCircleDown from '../../assets/expand_circle_down.svg';
import IconFilter from '../../assets/candlestick_chart.svg';

const MainFilter = () => {
  return (
    <View style={styles.filterContainer}>
      <Button
        type="clear"
        containerStyle={styles.genreButton}
        onPress={() => console.log('asdf')}
      >
        <Text style={styles.genreButtonText}>PLAVE</Text>
        <IconCircleDown
          width={20}
          height={20}
          color={'#000000'}
        />
      </Button>
      <Button
        type="clear"
        containerStyle={styles.genreButton}
        onPress={() => console.log('asdf')}
      >
        <IconFilter color={'#D2D4DA'} />
      </Button>
    </View>
  );
};

export default MainFilter;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },

  genreButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-between',
  },

  genreButtonText: {
    marginRight: 8,
    fontFamily: 'nanum_square_neo_deb',
    fontSize: 24,
    color: '#000000',
  },
});
