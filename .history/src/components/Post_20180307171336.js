import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Post = ({ title, author, body }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.body}>{body}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },

  author: {
    color: '#888',
  },

  body: {},
});
