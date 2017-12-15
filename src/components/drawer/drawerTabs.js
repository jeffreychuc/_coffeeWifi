import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import OrdersContainer from '../drawerTabs/orders/ordersContainer';
import ReviewsContainer from '../drawerTabs/reviews/reviewsContainer';
import StatusContainer from '../drawerTabs/status/statusContainer';

export default TabNavigator({
  Order: {
    screen: OrdersContainer,
  },
  Reviews: {
    screen: ReviewsContainer,
  },
  Stats: {
    screen: StatusContainer,
  }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

