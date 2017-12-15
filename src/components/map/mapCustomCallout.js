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
            <Text style={{color: 'white'}}>{this.props.name}</Text>
            <Text style={{color: 'white'}}>{this.props.distanceTo ? this.props.distanceTo.toFixed(2) : null } Miles</Text>
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
    bottom: -140,
    right: 115,
    zIndex: 0
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
    top: -150,
    overflow: 'hidden'
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
