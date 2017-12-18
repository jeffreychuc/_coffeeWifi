import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
export default class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'false'
    };
  }
  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <Fab
            active={!this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#2c3e50' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="ios-settings" />
            <Button onPress={() => this.props.logout()} style={{ backgroundColor: '#3B5998' }}>
              <Icon name="exit" />
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}
