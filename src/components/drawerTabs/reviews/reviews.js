import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Reviews extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Reviews',
    tabBarIcon: (<Icon name='ios-paper-outline' size={30}/> )
  };

  constructor(props) {
    super(props);
    this.renderReviews = this.renderReviews.bind(this);
    this.state={
      loading: true,
    }
  }

  componentDidMount() {
    this.props.fetchCurrentReviews(this.props.currentSpaceID).then(() => this.setState({loading: false}))
  }

  renderReviews() {
    return this.state.loading ? (<Text>Loading</Text>) : (

      <View>
        <Text>Reviews are loaded</Text>
      </View>

    );
  }

  render() {
    console.log('reviews', this.props.currentSpaceID);
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{padding: 5, paddingTop: 10}}>
          <Text> {this.props.currentSpaceID} </Text>
          {this.renderReviews()}
        </View>
      </View>
    );
  }
}
