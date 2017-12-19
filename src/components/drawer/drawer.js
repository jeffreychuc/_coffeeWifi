import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Item, Input, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerTabs from './drawerTabs';


export default class drawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SlidingUpPanel
      visible={this.props.drawerViewStatus}
      height={800}
      draggableRange={{top: 640, bottom: 0}}
      onRequestClose={() => this.props.setDrawerView(false)}>
        <View style={styles.drawerInternal}>
          <View style={{padding: 20, flex: 1}}>
            <DrawerTabs />
          </View>
        </View>
      </SlidingUpPanel>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerInternal: {
    height: 650,
    backgroundColor: 'white',
    borderRadius: 10
  },
  tabContainer: {
    height: 650,
    width: 300,
    backgroundColor: 'black',
    zIndex: 500
  },
  iconSize: {
    fontSize: 25
  }
};
