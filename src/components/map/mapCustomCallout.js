import React from 'react';
import { StyleSheet, Text, View, Button, Platform, Alert } from 'react-native';

export default class MapCustomCallout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>WORKS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b1d1c',
    margin: 10,
    borderRadius: 100,
    opacity: 0.8
  },
  text: {
  }
});




// <Text> {this.state.initialPosition}</Text>
//         <Text></Text>
//



// 37.78
// -122.40
