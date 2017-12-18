import React from 'react';
import SInfo from 'react-native-sensitive-info';
import MapView from 'react-native-maps';
import MapCustomCallout from './mapCustomCallout';
import MenuIconContainer from '../menuIcon/menuIconContainer';
import SearchFloatContainer from '../searchFloat/searchFloatContainer';
import FilterModalContainer from '../filterModal/filterModalContainer';
import DrawerContainer from '../drawer/drawerContainer';
import RedoSearchButtonContainer from '../../components/redoSearchButton/redoSearchButtonContainer';
import * as Animatable from 'react-native-animatable';
import SlidingUpPanel from 'rn-sliding-up-panel';
import merge from 'lodash/merge';
import haversine from 'haversine';
import Triangle from 'react-native-triangle';
import shortid from 'shortid';
import isEqual from 'lodash/isEqual';
import { StyleSheet, Text, View, Platform, Alert, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'native-base';
import LottieView from 'lottie-react-native';


const DEFAULT_PADDING = { top: 300, right: 100, bottom: 75, left: 100 };
const DEFAULT_INTIAL_DELTA = {longitudeDelta: 0.02000000049591222, latitudeDelta: 0.02811415461493283};
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.calcDistanceTo = this.calcDistanceTo.bind(this);
    this.renderSplashImage = this.renderSplashImage.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
    this.getWorkspaces = this.getWorkspaces.bind(this);
    this.closeAllCallouts = this.closeAllCallouts.bind(this);
    // init empty object so I can key in
    this.markerRefs = {};
    // this.renderRedoSearchButton = this.renderRedoSearchButton.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    let renderSearchTimerID;
    // this.fitPadding = this.fitPadding.bind(this);

    this.state = {
      initialPosition: null,
      lastPosition: null,
      loading: true,
      // filterModalDelay: false,
      currentSelectedPinRegion: null,
      lastSearchLocation: null,
      workspaces: [],
      renderSearch: false,
      fadeDelay: true
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let initialPosition = JSON.stringify(position);
        this.state.initialPosition = initialPosition;

        let location = [position.coords.latitude, position.coords.longitude];
        this.state.lastSearchLocation = {
          longitudeDelta: DEFAULT_INTIAL_DELTA.longitudeDelta,
          latitudeDelta: DEFAULT_INTIAL_DELTA.latitudeDelta,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        };
        this.props.fetchLocalWorkspaces(location, DEFAULT_INTIAL_DELTA.latitudeDelta * 69 / 2);
      },
      (error) => alert(error.message),
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let lastPosition = JSON.stringify(position);
      console.log('setting state to, ', { lastPosition });
      // this.setState({lastPosition});
      this.state.lastPosition = lastPosition;
    }, (error) => alert(error.message),
    {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000});
    // setTimeout(() => {this.state.loading ? this.refs.splash.fadeOut(300).then(() => this.setState({loading: false})) : null;}, 350);
    this.animation.play();
    setTimeout(() => this.state.loading ? this.setState({loading: false}) : null, 2500);
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
    this.props.setDrawerView(true);
  }

  getWorkspaces() {
    // need to close last opened callout
    let currLat = this.state.region.latitude;
    let currLong = this.state.region.longitude;
    let latDelta = this.state.region.latitudeDelta;
    let longDelta = this.state.region.longitudeDelta;
    // 1 latitude is 111045 meters
    let radius = Math.max(latDelta, longDelta) * 69/2;
    this.props.fetchLocalWorkspaces([currLat,  currLong], radius).then(currentWorkspaces => this.setState({currentWorkspaces}));
  }

  onRegionChange(region) {
    this.state.region = region;
    // logic to set state of render button
    if (this.state.loading) {
      this.state.lastSearchLocation = this.state.region;
    }
    //check if this.state.region is null or something
    clearTimeout(this.renderSearchTimerID);
    if (!isEqual(this.state.lastSearchLocation, this.state.region) && !this.state.renderSearch ) {
      //change this to dispatch
      this.renderSearchTimerID = setTimeout(() => this.props.setRedoSearchButton(true), 1000);
    }
  }

  //markers are objects in an array with a lat/long
  snapToMarker(markers) {
    // debugger;
    this.mapRef.fitToCoordinates(markers, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    });
  }

  closeAllCallouts()  {
    //super hacky but we cannot be sure which callout is open due to react-native-maps bug
    Object.values(this.markerRefs).forEach((marker) => {
      if (marker) {
        marker.hideCallout();
      }
    });
  }

  renderMapView() {
    let parsedState = JSON.parse(this.state.initialPosition);
    if (parsedState !== null) {
      console.log('drawing map');
      console.log(this.state);
      return (
        <MapView style={styles.map}
          initialRegion = {{
            latitude: parsedState.coords.latitude,
            longitude: parsedState.coords.longitude,
            longitudeDelta: 0.02,
            latitudeDelta: 0.02
          }}
          ref={(ref) => { this.mapRef = ref; }}
          followsUserLocation={false}
          loadingEnabled={true}
          showsUserLocation={true}
          mapType={'mutedStandard'}
          userLocationAnnotationTitle={''}
          // region={this.state.currentSelectedPinRegion}
          showsCompass={false}
          onRegionChange={region => this.onRegionChange(region)}
          // calloutOffset={{ x: -8, y: 28 }}
          // calloutAnchor={{ x: 0.5, y: 0.4 }}
        >
          {this.props.workspaces.map(workspace => {
            // console.log(workspace.loc.coordinates[1], workspace.loc.coordinates[0]);
            const currentLocParsed = JSON.parse(this.state.lastPosition).coords;
            let markerCords = {
              latitude: workspace.loc.coordinates[1],
              longitude: workspace.loc.coordinates[0],};
            return (
              <MapView.Marker
                ref={(ref) => { this.markerRefs[workspace._id] = ref; }}
                coordinate={markerCords}
                onCalloutPress={(e) => this.handleDrawer(e)}
                onPress={(e) => {
                  e.stopPropagation();
                  this.snapToMarker([markerCords, {longitude: currentLocParsed.longitude, latitude: currentLocParsed.latitude}]);
                  this.props.setCurrentSpaceView(workspace._id);
                }}
                key={shortid.generate()}
              >
                <MapView.Callout tooltip={true} style={styles.callout}>
                  <TouchableWithoutFeedback >
                    <View>
                      <MapCustomCallout
                        name={workspace.name} style={{zIndex: 10}}
                        currLatLong={this.state.lastPosition}
                        distanceTo={
                          this.calcDistanceTo({
                            latitude: workspace.loc.coordinates[1],
                            longitude: workspace.loc.coordinates[0]
                          })
                        }
                      />
                    </View>
                  </TouchableWithoutFeedback>
                  {/* <View style={styles.triangleView}>
                    <Triangle
                        width={30}
                        height={10}
                        color={'#D80016'}
                        direction={'down'}
                    />
                  </View> */}
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

  renderSplashImage() {
    // fade doesnt work :()
    if (!this.state.loading && this.state.fadeDelay) {
      setTimeout(() => this.setState({ fadeDelay: false}), 1000);
    }
    return this.state.fadeDelay ? (
      <Animatable.View style={styles.splash} animate={this.state.loading ? 'fadeIn' : 'fadeOut'}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../animations/splashLoading.json')}
          loop={true}
        />
      </Animatable.View>
    ) : null;
  }

  render() {
    let parsedState = JSON.parse(this.state.lastPosition);
    return (
      <View style={styles.container}>
        {this.renderMapView()}
        <View style={styles.filterModal}>
          <FilterModalContainer />
        </View >
        {/* <View style={styles.debug}>
          <Text> {this.state.lastPosition}</Text>
        </View> */}
        <SearchFloatContainer />
        <View style={styles.logout}>
          <MenuIconContainer />
        </View>
        <RedoSearchButtonContainer closeAllCallouts={this.closeAllCallouts} getWorkspaces={this.getWorkspaces} />
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
    position: 'absolute',
    height: 160,
    width: 200,
    backgroundColor: 'transparent',
    zIndex: 10000
  },
  triangleView: {
    position: 'absolute',
    bottom: 0
  },
  searchButtonView: {
    position: 'absolute',
    bottom: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchButtonHidden: {
    position: 'absolute',
    bottom: 30,
  }
});
