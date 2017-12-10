import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './src/store/configureStore';
import {Provider} from 'react-redux';
import AppViewContainer from './src/components/appViewContainer';

const store = configureStore();

class coffeewifi extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('coffeewifi', () => coffeewifi);
