import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import shortid from 'shortid';

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
    debugger;
    this.props.fetchCurrentReviews(this.props.currentSpaceID).then((reviews)=> console.log(reviews)).then(() => this.setState({loading: false}))
  }

  renderReviews() {
    let review = this.state.loading ? null : this.props.currentReviews[0];
    debugger;
    return this.state.loading ? (<Text>Loading</Text>) : (
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
