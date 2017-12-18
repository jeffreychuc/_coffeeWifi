import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Right, Left, Container, Header, Content, Card, CardItem, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import shortid from 'shortid';
import LottieView from 'lottie-react-native';

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
    this.animation.play();
    this.props.fetchCurrentStats(this.props.currentSpaceID).then(() => this.setState({loading: false}))
  }

  renderStats() {
    return this.state.loading ? (
      <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../../animations/drawerLoading.json')}
          loop={true}
      />
    ) : (
      <Content>
        <View style={{padding: 10, borderColor: 'black', borderWidth: 1, borderRadius: 3}}>
          <Text>Reviews for {}</Text>
        </View>
        {Object.keys(this.props.currentStats).map((stat) => (
          <Card key={shortid.generate()} style={{height: 'auto'}}>
            <CardItem header style={{}}>
              <Left>
                <Text>{stat}</Text>
              </Left>
              <Right>
                <View style={{height: 15}}>
                  {console.log()}
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={this.props.currentStats[stat]}
                    starSize={15}
                  />
                </View>
              </Right>
            </CardItem>
          </Card>
        ))}
      </Content>
    );
  }

  render() {
    console.log('reviews', this.props.currentSpaceID);
    return (
      <Container>
        {this.renderStats()}
      </Container>
    );
  }
}
