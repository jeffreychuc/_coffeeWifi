import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { _initialUIState } from '../../reducers/ui';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';

export default class SearchFloat extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    debugger;
    this.state = _initialUIState;
  }

  componentWillReceiveProps(nextProps)  {
    debugger;
    console.log('nextProps', nextProps);
    if (!isEqual(this.state, nextProps))  {
      this.setState(merge({}, this.state, nextProps));
    }
  }

  handleFilter()  {
    this.props.setFilterView(true);
  }

  render() {
    return (
        <View style={styles.container}rounded>
          <Icon name='ios-search' style={{fontSize: 17}}/>
          <View style={styles.searchFloatView}>
            <Input style={styles.searchFloat} selectTextOnFocus={true} placeholder="Search" />
          </View>
          <Icon name={this.props.filterIconStatus ? 'ios-funnel' : 'ios-funnel-outline'} onPress={() => this.handleFilter()} style={{fontSize: 17}}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    top: 20,
    left: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 13,
    height: 40,
    backgroundColor: 'white',
    opacity: 1,
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 0,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: 'gray',
    shadowOffset: { height: 1, width: 1 },
  },
  searchFloat: {
    width: 290,
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize: 13
  },
  searchFloatView: {
    height: 20,
  },
});


