import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Post = ({ title, author, body }) => (
  <View>
    <Text>Post</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 4,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },

  author: {
    color: '#999',
  },

  body: {
    color: '#666',
  },
});
