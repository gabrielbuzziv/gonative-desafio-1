import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import 'config/DevToolsConfig';
import 'config/ReactronConfig';

import Post from 'components/Post';

export default class App extends Component {
  componentDidMount() {
    console.tron.log('something');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Something</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
