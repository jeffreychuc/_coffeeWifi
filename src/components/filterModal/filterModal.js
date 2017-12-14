import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';

export default class FilterModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.state = {filterViewStatus: false};
  }

  componentWillReceiveProps(nextProps)  {
    if (!isEqual(this.state, nextProps))  {
      this.setState(merge({}, this.state, nextProps));
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
    return (
      <View style={styles.container}rounded>
        <Text>LOL</Text>
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
      </View>
    );
  }

  render() {
    return (
        <View>
          <TouchableOpacity onPress={e => this.handleSubmit(e, false)} style={styles.modalBack} />
          {this.renderModal()}
        </View>
    );
  }
}
// {/* {this.renderModal()} */}
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


