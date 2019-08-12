import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from  'react-navigation';
import {HomeHeader, ProductDetails, BuyIt, Locaton, ShopsList ,Shops, Products, SearchPlace } from '../../Menu/screenNames';
import ProductsComponent from './Products';
import ProductDetailsComponent from './ProductDetails';
import BuyItComponent from './BuyIt';
import LocatonComponent from '../../Customer/Home/Location';
import ShopsComponent from './Shops';
import SearchPlaceComponent from '../../Map/SearchPlace';

const stackNav = createStackNavigator({
  SearchPlace: {
    screen: SearchPlaceComponent
  },
  Shops: {
    screen: ShopsComponent
  },
  Products: {
    screen: ProductsComponent,
    navigationOptions: ({navigation}) => ({
      //title: "Products by Shop",
      headerTitleStyle: {
        color: "#593196"
      }
    })  
  },
  
  ProductDetails: {
    screen: ProductDetailsComponent,
    navigationOptions: ({navigation}) => ({
      title: "Details",
      headerTitleStyle: {
        color: "#593196"
      }
    })     
  },
  BuyIt: {
    screen: BuyItComponent,
    navigationOptions: ({navigation}) => ({
      title: "Buy",
      headerTitleStyle: {
        color: "#593196"
      }
    })  
  },

});
const HomeNav=createAppContainer(stackNav);
export default HomeNav;