import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Orders extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Stats',
    tabBarIcon: (<Icon name='ios-stats-outline' size={30}/> )
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{padding: 5, paddingTop: 10}}>
          <Text> Stats </Text>
        </View>
      </View>
    );
  }
}
