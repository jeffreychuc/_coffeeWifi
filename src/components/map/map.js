import React from 'react';
import SInfo from 'react-native-sensitive-info';
import MapView from 'react-native-maps';
import MapCustomCallout from './mapCustomCallout';
import MenuIconContainer from '../menuIcon/menuIconContainer';
import SearchFloatContainer from '../searchFloat/searchFloatContainer';
import FilterModalContainer from '../filterModal/filterModalContainer';
import haversine from 'haversine';
import { StyleSheet, Text, View, Button, Platform, Alert } from 'react-native';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.calcDistanceTo = this.calcDistanceTo.bind(this);
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
    {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000});
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

  calcDistanceTo(workSpace)  {
    if (this.state.lastPosition) {
      let currLat = JSON.parse(this.state.lastPosition).coords.latitude;
      let currLong = JSON.parse(this.state.lastPosition).coords.longitude;
      let start = {latitude: currLat, longitude: currLong};
      let end = {latitude: workSpace.latitude, longitude: workSpace.longitude};
      return haversine(start, end, {unit: 'mile'});
    }
    else {
      return null;
    }
  }

  renderMapView() {
    let parsedState = JSON.parse(this.state.initialPosition);
    if (parsedState !== null) {
      console.log('drawing map');
      return (
        <MapView style={styles.map}
          initialRegion = {{
            latitude: parsedState.coords.latitude,
            longitude: parsedState.coords.longitude,
            longitudeDelta: 0.005,
            latitudeDelta: 0.006
          }} followsUserLocation={false}
             loadingEnabled={true}
             showsUserLocation={true}
             mapType={'mutedStandard'}
             userLocationAnnotationTitle={''}
        >
          <MapView.Marker
              coordinate={{latitude: 37.785,
              longitude: -122.4064}}
              onPress={(e) => e.stopPropagation()}
          >
            <MapView.Callout tooltip={true} style={styles.callout}>
              <MapCustomCallout currLatLong={this.state.lastPosition} distanceTo={this.calcDistanceTo({latitude: 37.785,
              longitude: -122.4064})} />
            </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker
              coordinate={{latitude: 37.783,
              longitude: -122.403}}
              onPress={(e) => e.stopPropagation()}
          >
          <MapView.Callout tooltip={true} style={styles.callout}>
              <MapCustomCallout currLatLong={this.state.lastPosition} distanceTo={this.calcDistanceTo({latitude: 37.785,
              longitude: -122.4064})} />
            </MapView.Callout>
          </MapView.Marker>
        </MapView>
      );
    }
    else  {
      return null;
    }
  }
  // 37.7988539,-122.4016086 //fora thinkspace
  render() {
    let parsedState = JSON.parse(this.state.lastPosition);
    return (
      <View style={styles.container}>
        {this.renderMapView()}
        <View style={styles.filterModal}>
          <FilterModalContainer />
        </View>
        <View style={styles.debug}>
          <Text> {this.state.lastPosition}</Text>
        </View>
        <SearchFloatContainer />
        <View style={styles.logout}>
            <MenuIconContainer />
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
    bottom: 0,
    right: 0
  },
  debug : {
    position: 'absolute',
    top: 500,
    left: 20
  },
  searchFloat: {
    width: 100,
    top: 20
  },
  filterModal: {
    position: 'absolute',
    top: 20,
    left: 0
  }
});
