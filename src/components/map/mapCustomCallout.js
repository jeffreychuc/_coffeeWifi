import React from 'react';
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: -4,
    right: 10,
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
    overflow: 'hidden'
  },
});
