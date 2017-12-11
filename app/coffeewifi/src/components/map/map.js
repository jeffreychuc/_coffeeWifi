import React from 'react';
import SInfo from 'react-native-sensitive-info';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button, Platform, Alert } from 'react-native';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      initialPosition: null,
      lastPosition: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let lastPosition = JSON.stringify(position);
      console.log('setting state to, ', { lastPosition });
      this.setState({lastPosition});
    }, (error) => alert(error.message),
    {enableHighAccuracy: false, timeout: 10000, maximumAge: 1000});
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  handleLogout() {
    this.props.logout().then(
      SInfo.setItem('currentUser', null, {
        sharedPreferencesName: 'accessToken',
        keychainService: 'com.rootuser.coffeewifi'
      })
    );
  }

  renderMapView() {
    debugger;
    let parsedState = JSON.parse(this.state.lastPosition);
    if (parsedState !== null) {
      console.log('drawing map');
      return (
        <MapView style={styles.map}
          initialRegion = {{
            latitude: parsedState.coords.latitude,
            longitude: parsedState.coords.longitude,
            longitudeDelta: 0.005,
            latitudeDelta: 0.006
          }}
        />
      );
    }
    else  {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderMapView()}
        <View style={styles.logout}>
        <Button
          onPress={this.handleLogout}
          title={'Log Out'}
        />
        </View>
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
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logout: {
    position: 'absolute',
    bottom: 30,
    right: 30
  }
});




// <Text> {this.state.initialPosition}</Text>
//         <Text></Text>
//         <Text> {this.state.lastPosition}</Text>

