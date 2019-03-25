/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TextInput, View, Image, FlatList, Button, Alert, StatusBar } from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
})

export default class Index extends Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.list}>
        <View style={styles.container}>
          <StatusBar
            animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
            hidden={false}  //是否隐藏状态栏。
            backgroundColor={'transparent'} //状态栏的背景色
            translucent={true} //指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
            barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
          >
          </StatusBar>
          <View style={styles.searchBox}>
            <TextInput
              keyboardType='web-search'
              placeholder='搜索'
              style={styles.inputText}
              underlineColorAndroid='transparent'/>
          </View>
        </View>
        <View style={styles.item}>
          <Button
            style={styles.but}
            onPress={() => {
              this.props.navigation.navigate('PizzaTranslator')
            }}
            title="PizzaTranslator"
          />
        </View>
        <View style={styles.item}>
          <Button
            style={styles.but}
            onPress={() => {
              this.props.navigation.navigate('Touchables')
            }}
            title="Touchables"
          />
        </View>
        <View style={styles.item}>
          <Button
            style={styles.but}
            onPress={() => {
              this.props.navigation.navigate('ScrollViews')
            }}
            title="ScrollViews"
          />
        </View>
        <View style={styles.item}>
          <Button
            style={styles.but}
            onPress={() => {
              this.props.navigation.navigate('SectionListBasics')
            }}
            title="SectionListBasics"
          />
        </View>
        <View style={styles.item}>
          <Button
            style={styles.but}
            onPress={() => {
              this.props.navigation.navigate('Animations')
            }}
            title="Animations"
          />
        </View>
        <View style={styles.item}>
          <Button
            style={styles.but}
            onPress={() => {
              this.props.navigation.navigate('Movices')
            }}
            title="Movices"
          />
        </View>
        <View style={styles.item}>
          <Button
            style={styles.but}
            onPress={() => {
              Alert.alert('你点击了按钮！')
            }}
            title="点我！"
          />
        </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    height: 68,
    backgroundColor: '#d74047',
    alignItems: 'center'
  },
  searchBox: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 12
  },
  list: {
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  item: {
    justifyContent: 'center',
    height: 40,
    margin: 20
  },
  but: {}
})
