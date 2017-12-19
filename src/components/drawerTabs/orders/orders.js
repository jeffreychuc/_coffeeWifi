import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Card, CardItem, Left, Right, Content, Thumbnail, Body, Image, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Orders extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Order Food',
    tabBarIcon: (<Icon name='food' size={30}/> )
  };

  constructor(props) {
    super(props);
    this.renderOrders = this.renderOrders.bind(this);
    this.state={
      loading: true,
    }
  }

  componentDidMount() {
    // this.props.fetchCurrentReviews(this.props.currentSpaceID).then(() => this.setState({loading: false}))
  }

  renderOrders() {
    // return this.state.loading ? (<Text>Loading</Text>) : (

      return (
        <View >
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 50, fontWeight: 'bold'}}>
              Coming Soon!
            </Text>
          </View>
        </View>
      );

    // );
  }

  render() {
    console.log('reviews', this.props.currentSpaceID);
    return (
      <View style={{position: 'relative', bottom: -200, backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
        <View style={{justifyContent:'center', alignContent: 'center'}}>
          {/* <Text> {this.props.currentSpaceID} </Text> */}
          {this.renderOrders()}
        </View>
      </View>
    );
  }
}
