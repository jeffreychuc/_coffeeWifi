import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, List, ListItem, Left, Body, Right, Switch } from 'native-base';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';
import * as Animatable from 'react-native-animatable';

export default class FilterModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.state = {
      filterModalDelay: false,
    };
  }

  componentWillReceiveProps(nextProps)  {
    if (nextProps.filterViewStatus)  {
      this.setState({filterModalDelay: true});
    }
    else  {
      setTimeout(() => this.setState({filterModalDelay: false}), 400);
    }
  }

  handleSubmit(e, apply) {
    e.stopPropagation();
    if (apply)  {
      //do shit
    }
    console.log('wtf');
    this.props.setFilterView(false);
  }

  renderModal()  {
    console.log('state of filter modal is ', this.state);
    return (
      <Container style={styles.container}rounded>
        <Content>
          <List>
            <ListItem>
              <Body>
                <Text>I'm looking for a workspace that has</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name='power' />
              </Left>
              <Body>
                <Text>Outlets</Text>
              </Body>
              <Right>
                <TextInput
                  style={{height: 40, width: 50}}
                  onChangeText={outlets => this.setState({outlets})}
                  value={this.state.outlets}
                  selectTextOnFocus={true}
                  maxLength={2}
                  keyboardType={'numeric'}
                />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Wifi</Text>
              </Body>
              <Right>
                <Switch
                value={this.state.wifi}
                onValueChange={wifi => this.setState({wifi})}
                />
              </Right>
            </ListItem>
          </List>
        </Content>
        <View style={styles.buttonBottom}>
          <Button onPress={(e) => this.handleSubmit(e, false)} style={styles.button}>
            <View style={styles.buttonTextView}>
              <Text >Cancel</Text>
            </View>
          </Button>
          <Button onPress={(e) => this.handleSubmit(e, true)} style={styles.button}>
            <View style={styles.buttonTextView}>
              <Text style={styles.buttonText}>Apply</Text>
            </View>
        </Button>
        </View>
      </Container>
    );
  }



  render() {
    console.log('filterModalDelay is ', this.state.filterModalDelay);
    return this.state.filterModalDelay ? (
      <Animatable.View animation={this.props.filterViewStatus ?  'fadeIn' : 'fadeOut' } duration={300} style={styles.filterModal}>
        <TouchableOpacity onPress={e => this.handleSubmit(e, false)} style={styles.modalBack} />
        {this.renderModal()}
      </Animatable.View>
    ) : null;
  }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  modalBack: {
    position: 'absolute',
    height: height,
    width: width,
    backgroundColor: 'transparent'
  },
  container: {
    position: 'absolute',
    flexDirection: 'column',
    height: 500,
    width: 340,
    top: 60,
    left: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 13,
    backgroundColor: 'white',
    opacity: 1,
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 0,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: 'gray',
    shadowOffset: { height: 1, width: 0 },
  },
  buttonBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300
  },
  button: {
    width: 120,
    left: 10,
    backgroundColor: 'gray'
  },
  buttonTextView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:  {
    fontWeight: 'bold',
  }
});


