import React from 'react';
import Triangle from 'react-native-triangle';
import { StyleSheet, Text, View, Button, Platform, Alert } from 'react-native';

export default class MapCustomCallout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.mainInfo}>
            <Text style={{color: 'white'}}>STARBUKUSES</Text>
          </View>
        </View>
        <View style={styles.triangleView}>
          <Triangle
            width={30}
            height={10}
            color={'#D80016'}
            direction={'down'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -10,
    right: -3
  },
  mainInfo: {
    position: 'absolute',
    padding: 10,
    flex: 1,
    backgroundColor: '#1b1d1c',
    margin: 10,
    borderRadius: 10,
    opacity: 0.8,
    width: 200,
    height: 150,
    left: -90,
    top: -150
  },
  triangleView: {
    position: 'absolute',
    left: 0,
    top: 10,
  },
  triangle: {
    position: 'absolute',
    opacity: 0.8
  }
});
