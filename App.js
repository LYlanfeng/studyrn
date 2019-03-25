import React, { Component } from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'

import Ionicons from 'react-native-vector-icons/Feather'

import Index from './src/Index'
import Movices from './src/Movices'
import PizzaTranslator from './src/PizzaTranslator'
import Touchables from './src/Touchables'
import ScrollViews from './src/ScrollViews'
import SectionListBasics from './src/SectionListBasics'
import Animations from './src/Animations'

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: Index,
    User: Movices,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = 'home'
        }
        if (routeName === 'User') {
          iconName = 'user'
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor}/>
      },
    }),
    tabBarOptions: {
      activeTintColor: 'rgb(4,127,116)',
      inactiveTintColor: 'gray',
    },
  }
)

const AppStackNavigator = createStackNavigator({
  bottomTabNavigator: {
    screen: bottomTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  Index: {
    screen: Index
  },
  Movices: {
    screen: Movices
  },
  PizzaTranslator: {
    screen: PizzaTranslator
  },
  Touchables: {
    screen: Touchables
  },
  ScrollViews: {
    screen: ScrollViews
  },
  SectionListBasics: {
    screen: SectionListBasics
  },
  Animations: {
    screen: Animations
  }
}, {
  initialRouteName: 'bottomTabNavigator',
  defaultNavigationOptions: {
    // header: null
  }
})
export default createAppContainer(AppStackNavigator)
