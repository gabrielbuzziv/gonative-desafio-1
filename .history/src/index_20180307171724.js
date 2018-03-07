import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import 'components/Post';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Post title="Título" author="Author" body="Corpo do Post" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
