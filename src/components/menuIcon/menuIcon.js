import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import SInfo from 'react-native-sensitive-info';

export default class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      active: 'false'
    };
  }

  handleLogout() {
    this.props.logout().then(() =>
      SInfo.setItem('currentUser', null, {
        sharedPreferencesName: 'accessToken',
        keychainService: 'com.rootuser.coffeewifi'
      })
    );
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
            <Button onPress={() => this.handleLogout()} style={{ backgroundColor: '#3B5998' }}>
              <Icon name="exit" />
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}
