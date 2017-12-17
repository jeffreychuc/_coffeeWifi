import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';


export default class redoSearchButton extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.redoSearchButtonStatus);
    return (!this.props.redoSearchButtonStatus) ? null : (
      <View style={styles.container}>
        <Button rounded
          onPress={() => {
            this.props.getWorkspaces();
            this.props.setRedoSearchButtonStatus(false);
          }}
          style={styles.searchButton}
        >
          <Text style={{fontSize: 15}}>Redo Search In This Area</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    width: 250
  },
});


