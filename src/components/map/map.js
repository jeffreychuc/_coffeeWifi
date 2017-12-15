import React from 'react';
import SInfo from 'react-native-sensitive-info';
import MapView from 'react-native-maps';
import MapCustomCallout from './mapCustomCallout';
import MenuIconContainer from '../menuIcon/menuIconContainer';
import SearchFloatContainer from '../searchFloat/searchFloatContainer';
import FilterModalContainer from '../filterModal/filterModalContainer';
import DrawerContainer from '../drawer/drawerContainer';
import * as Animatable from 'react-native-animatable';
import SlidingUpPanel from 'rn-sliding-up-panel';
import haversine from 'haversine';
import shortid from 'shortid';
// import { fetchLocalWorkspaces } from '../../util/db_api_util';
import { StyleSheet, Text, View, Button, Platform, Alert, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.calcDistanceTo = this.calcDistanceTo.bind(this);
    this.renderSplashImage = this.renderSplashImage.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
    this.state = {
      initialPosition: null,
      lastPosition: null,
      loading: true,
      filterModalDelay: false,
      currentRegion: null
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
    setTimeout(() => {this.state.loading ? this.refs.splash.fadeOut(300).then(() => this.setState({loading: false})) : null;}, 350);
  }

  componentWillReceiveProps(nextProps)  {
    if (nextProps.filterViewStatus)  {
      this.setState({filterModalDelay: true});
    }
    else  {
      setTimeout(() => this.setState({filterModalDelay: false}), 600);
    }
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

  handleDrawer(e)  {
    e.stopPropagation();
    console.log('lol');
    this.props.setDrawerView(true);
  }

  // getWorkspaces() {
  //   let currentWorkspaces = fetchLocalWorkspaces();
  // }

  renderMapView() {
    let parsedState = JSON.parse(this.state.initialPosition);

    let testData =
    [{"_id": '1', "name": 'Starbucks1', "loc": [-122.4062, 37.78465], "reviews": [1,2,3,4,5], "outlets": 5 },
    {"_id": '2', "name": 'Starbucks2', "loc": [-122.40625, 37.78465], "reviews": [1,2,3,4,5], "outlets": 5 },
    {"_id": '3', "name": 'Starbucks3', "loc": [-122.4065, 37.78465], "reviews": [1,2,3,4,5], "outlets": 5 },
    {"_id": '4', "name": 'Starbucks4', "loc": [-122.40625, 37.7865], "reviews": [1,2,3,4,5], "outlets": 5 },
    {"_id": '5', "name": 'Starbucks5', "loc": [-122.40625, 37.465], "reviews": [1,2,3,4,5], "outlets": 5 },
    {"_id": '6', "name": 'Starbucks6', "loc": [-122.40625, 37.78465], "reviews": [1,2,3,4,5], "outlets": 5 },
    {"_id": '7', "name": 'Starbucks7', "loc": [-122.4062, 37.7845], "reviews": [1,2,3,4,5], "outlets": 5 },
    {"_id": '8', "name": 'Starbucks8', "loc": [-122.4625, 37.465], "reviews": [1,2,3,4,5], "outlets": 5 },
    {"_id": '9', "name": 'Starbucks9', "loc": [-122.4065, 37.8465], "reviews": [1,2,3,4,5], "outlets": 5 },
    {"_id": '10', "name": 'Starbucks10', "loc": [-122.4062, 37.7465], "reviews": [1,2,3,4,5], "outlets": 5 }];

    if (parsedState !== null) {
      console.log('drawing map');
      return (
        <MapView style={styles.map}
          initialRegion = {{
            latitude: parsedState.coords.latitude,
            longitude: parsedState.coords.longitude,
            longitudeDelta: 0.01,
            latitudeDelta: 0.01
          }} followsUserLocation={false}
             loadingEnabled={true}
             showsUserLocation={true}
             mapType={'mutedStandard'}
             userLocationAnnotationTitle={''}
            //  onRegionChange={(region) => {this.setState({currentRegion: region}); console.log(this.state);}}
        >
          {testData.map(workspace => {
            console.log(workspace.loc[1], workspace.loc[0]);
            return (
            <MapView.Marker
              coordinate={{
              latitude: workspace.loc[1],
              longitude: workspace.loc[0]}}
              onCalloutPress={(e) => this.handleDrawer(e)}
              onPress={(e) => {e.stopPropagation(); this.props.setCurrentSpaceView(workspace._id);}}
              key={shortid.generate()}
            >
              <MapView.Callout tooltip={true} style={styles.callout}>
                <TouchableWithoutFeedback style={{ position:'absolute',left:-75, bottom: 0, backgroundColor: 'red',height: 150, width: 200}}>
                  <View>
                    <MapCustomCallout name={workspace.name} style={{zIndex: 10}}currLatLong={this.state.lastPosition} distanceTo={this.calcDistanceTo({latitude: workspace.loc[1],
                    longitude: workspace.loc[0]})} />
                  </View>
                </TouchableWithoutFeedback>
              </MapView.Callout>
            </MapView.Marker>
            );
          })}
        </MapView>
      );
    }
    else  {
      return null;
    }
  }

  renderFilterModal() {
    //need to handle animation out somehow
    return this.state.filterModalDelay ? (
      <Animatable.View animation={this.props.filterViewStatus ?  'fadeIn' : 'fadeOut' } duration={300} style={styles.filterModal}>
        <FilterModalContainer />
      </Animatable.View>
    ) : null;
  }

  renderSplashImage() {
    return this.state.loading ?
        (<Animatable.View animate={'fadeOut'} ref='splash' useNativeDriver style={styles.splash}>
          <Text style={{color: 'white'}}> Loading... </Text>
         </Animatable.View>
    ) : null;
  }

  // 37.7988539,-122.4016086 //fora thinkspace
  render() {
    let parsedState = JSON.parse(this.state.lastPosition);
    return (
      <View style={styles.container}>
        {this.renderMapView()}
        {this.renderFilterModal()}
        <View style={styles.debug}>
          <Text> {this.state.lastPosition}</Text>
        </View>
        <SearchFloatContainer />
        <View style={styles.logout}>
          <MenuIconContainer />
        </View>
        <DrawerContainer />
        {this.renderSplashImage()}
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
    zIndex: -1
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
    left: 0,
    justifyContent: 'center'
  },
  splash: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  callout: {
    height: 150,
    width: 200
  }
});
