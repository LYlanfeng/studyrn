/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, FlatList, StatusBar } from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
})
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json'


type Props = {};
export default class Movices extends Component<Props> {
  static navigationOptions = {
    title: '电影'
  }
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loaded: false
    }
    this.fetchData = this.fetchData.bind(this)
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true
        });
      });
  }
  render () {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <View style={styles.listView}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderMovie}
          style={styles.list}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }
  renderMovie({ item }) {
    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  listView: {
    flex: 1
  },
  list: {
    paddingTop: 0,
    height: 300,
    backgroundColor: "#F5FCFF"
  }
});
