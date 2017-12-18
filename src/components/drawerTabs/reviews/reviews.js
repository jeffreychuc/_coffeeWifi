import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import shortid from 'shortid';
import LottieView from 'lottie-react-native';

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
    this.animation.play();
    this.props.fetchCurrentReviews(this.props.currentSpaceID).then(() => setTimeout(() => this.setState({loading: false}), 500));
  }

  renderReviews() {
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
        {this.props.currentReviews.map((review) => (
          <Card key={shortid.generate()} style={{height: 'auto'}}>
            <CardItem header style={{}}>
              <Text>{review.name}</Text>
              <Text>{'    '}</Text>
              <View style={{height: 15}}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={review.stars}
                  starSize={15}
                />
              </View>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {review.content}
                </Text>
              </Body>
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
        {this.renderReviews()}
      </Container>
    );
  }
}
