import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polygon,
  Polyline,
} from 'react-native-nmap';

interface Props {
  style?: ViewStyle;
}

const Map: React.FC<Props> = ({ style }) => {
  const P0 = { latitude: 37.564362, longitude: 126.977011 };
  const P1 = { latitude: 37.565051, longitude: 126.978567 };
  const P2 = { latitude: 37.565383, longitude: 126.976292 };

  return (
    <View style={style}>
      <NaverMapView
        style={{ width: '100%', height: '100%' }}
        showsMyLocationButton={true}
        center={{ ...P0, zoom: 16 }}
      >
        <Marker
          coordinate={P0}
          onClick={() => console.warn('onClick! p0')}
        />
        <Marker
          coordinate={P1}
          pinColor="blue"
          onClick={() => console.warn('onClick! p1')}
        />
        <Marker
          coordinate={P2}
          pinColor="red"
          onClick={() => console.warn('onClick! p2')}
        />
      </NaverMapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
