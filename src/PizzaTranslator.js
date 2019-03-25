/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TextInput, View, Image, FlatList, Button, Alert, StatusBar } from 'react-native'


export default class PizzaTranslator extends Component {
  static navigationOptions = {
    title: '处理输入'
  }
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  render () {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({

})
