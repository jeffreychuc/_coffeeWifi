import React from 'react';
import { StyleSheet, Text, View, Button, Platform, Alert } from 'react-native';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';


var credentials = require('./auth0-credentials');
const auth0 = new Auth0(credentials);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null };
  }

  componentDidMount() {
    //setting access token for user if it exists in keychain
    debugger;
    SInfo.getItem('accessToken', {
      sharedPreferencesName: 'accessToken',
      keychainService: 'com.rootuser.coffeewifi'
      }).then(accessToken => {
          console.log(accessToken) //value1
          if (accessToken) {
            this.setState({accessToken: accessToken});
          }
      }).then(() => this._getUserInfo());

  }

  _onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://' + credentials.domain + '/userinfo'
      })
      .then(credentials => {
        debugger;
        console.log(credentials);
        Alert.alert(
          'Success',
          'AccessToken: ' + credentials.accessToken,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
        this.setState({ accessToken: credentials.accessToken });

        SInfo.setItem('accessToken', credentials.accessToken, {
          sharedPreferencesName: 'accessToken',
          keychainService: 'com.rootuser.coffeewifi'
          }).then((value) => {
                  console.log(value); //value 1
                  this._getUserInfo();
          });

      })
      .catch(error => console.log(error));
  };

  _onLogout = () => {
    if (Platform.OS === 'android') {
      this.setState({ accessToken: null });
    } else {
      auth0.webAuth
        .clearSession({})
        .then(success => {
          this.setState({ accessToken: null });
          SInfo.setItem('accessToken', null, {
            sharedPreferencesName: 'accessToken',
            keychainService: 'com.rootuser.coffeewifi'
            }).then((value) =>
                    console.log(value) //value 1
            );
        })
        .catch(error => console.log(error));
    }
  };

  _getUserInfo = async () => {
    console.log('getting user info in getUserInfo() for ', this.state.accessToken);
    try {
      let response = await fetch('https://rootuser.auth0.com/userinfo', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + this.state.accessToken,
        },
      });
      let responseJson = await response.json();
      if(responseJson !== null) {
        console.log('Got user info: ' + responseJson.email);
        this.setState({ profile: responseJson});
      }
    } catch (error) {
      console.log('Error in retrieving userinfo from Auth0: ' + error.message);
    }
  }

  render() {
    let loggedIn = this.state.accessToken === null ? false : true;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>_coffeeWifi - Login</Text>
        <Text>
          You are {loggedIn ? '' : 'not '}logged in.
        </Text>
        <Button
          onPress={loggedIn ? this._onLogout : this._onLogin}
          title={loggedIn ? 'Log Out' : 'Log In'}
        />
        <Text> {this.state.profile ? JSON.stringify(this.state.profile) : false} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
