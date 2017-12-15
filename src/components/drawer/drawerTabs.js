import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import OrdersContainer from '../drawerTabs/orders/ordersContainer';
import ReviewsContainer from '../drawerTabs/reviews/reviewsContainer';
import StatsContainer from '../drawerTabs/stats/statsContainer';

export default TabNavigator({
  Order: {
    screen: OrdersContainer,
  },
  Reviews: {
    screen: ReviewsContainer,
  },
  Stats: {
    screen: StatsContainer,
  }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

