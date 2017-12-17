import React from 'react';
import { StyleSheet, Text, View, Button, Platform, Alert } from 'react-native';
import MapViewContainer from '../map/mapViewContainer';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';
import * as SessionAPIUtil from '../../util/session_api_util';


var credentials = require('../../../auth0-credentials');
const auth0 = new Auth0(credentials);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { currentUserProfile: null };
  }

  componentDidMount() {
    //getting access token for user if it exists in keychain
    SInfo.getItem('currentUser', {
      sharedPreferencesName: 'accessToken',
      keychainService: 'com.rootuser.coffeewifi'
      }).then(accessToken => {
        // debugger;
        console.log(accessToken);
          if (accessToken) {
            this.props.getUserProfile(accessToken)
            .then(currentUserProfile => {
              this.setState({ currentUserProfile: currentUserProfile.currentUserProfile });
              //SAVE currentUserProfile.currentUserProfile object

              // SessionAPIUtil.saveUserProfile(currentUserProfile.currentUserProfile);



              }
            );
          }
      });
  }

  handleLogin() {
    this.props.login().then(action => {
      SInfo.setItem('currentUser', action.currentUser.accessToken, {
        sharedPreferencesName: 'accessToken',
        keychainService: 'com.rootuser.coffeewifi'
      });
      this.props.getUserProfile(action.currentUser.accessToken)
      .then(currentUserProfile => {
        this.setState({ currentUserProfile: currentUserProfile.currentUserProfile });
        }
      );
    });
  }

  handleLogout() {
    this.props.logout().then(currentUser => {
      this.setState({currentUser: currentUser, currentUserProfile: null});
    }).then(() =>
      SInfo.setItem('currentUser', null, {
        sharedPreferencesName: 'accessToken',
        keychainService: 'com.rootuser.coffeewifi'
      })
    );
  }

  renderSplash() {
    let loggedIn = this.props.loggedIn;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>_coffeeWifi - Login</Text>
        <Text>
          You are {loggedIn ? '' : 'not '}logged in.
        </Text>
        <Button
          onPress={loggedIn ? this.handleLogout : this.handleLogin}
          title={loggedIn ? 'Log Out' : 'Log In'}
        />
        <Text> {this.state.currentUserProfile ? JSON.stringify(this.state.currentUserProfile) : false} </Text>
      </View>
    );
  }
  render() {
    let loggedIn = this.props.loggedIn;
    // let loggedIn = true;
    if (loggedIn) {
      return <MapViewContainer />;
    }
    else  {
      return this.renderSplash();
    }
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
