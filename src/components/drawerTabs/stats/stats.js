import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Stats extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Stats',
    tabBarIcon: (<Icon name='ios-paper-outline' size={30}/> )
  };

  constructor(props) {
    super(props);
    this.renderStats = this.renderStats.bind(this);
    this.state={
      loading: true,
    }
  }

  componentDidMount() {
    // this.props.fetchCurrentStats(this.props.currentSpaceID).then(() => this.setState({loading: false}))
  }

  renderStats() {
    return this.state.loading ? (<Text>Loading</Text>) : (

      <View>
        <Text>Stats are loaded</Text>
      </View>

    );
  }

  render() {
    console.log('Stats', this.props.currentSpaceID);
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{padding: 5, paddingTop: 10}}>
          <Text> {this.props.currentSpaceID} </Text>
          {this.renderStats()}
        </View>
      </View>
    );
  }
}
