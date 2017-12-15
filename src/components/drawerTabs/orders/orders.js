import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Orders extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Orders',
    tabBarIcon: (<Icon name='ios-restaurant-outline' size={30}/> )
  };

  constructor(props) {
    super(props);
  }

  render() {
    console.log('orders', this.props.currentSpaceID);
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{padding: 5, paddingTop: 10}}>
          <Text> {this.props.currentSpaceID} </Text>
        </View>
      </View>
    );
  }
}
