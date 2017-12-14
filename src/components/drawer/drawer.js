import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';
import SlidingUpPanel from 'rn-sliding-up-panel';

export default class drawer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <View>
          <SlidingUpPanel
          visible={this.props.drawerViewStatus}
          style={styles.container}
          onRequestClose={() => this.props.setDrawerView(false)}>
            <View >
              <Text>Here is the content inside panel</Text>
              <Button title='hide' onPress={() => this._panel.transitionTo(0)} />
            </View>
          </SlidingUpPanel>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
