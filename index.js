import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './src/store/configureStore';
import {Provider} from 'react-redux';
import AppViewContainer from './src/components/app/appViewContainer';
import { Sentry } from 'react-native-sentry';
Sentry.config('https://9722243442dd4915b14127e2bc13b8fb:ac6ec214ab21476ab03b0b147f4964b8@sentry.io/257625').install();

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
