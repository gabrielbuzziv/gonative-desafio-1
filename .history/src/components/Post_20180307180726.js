import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Post = ({ title, author, body }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.body}>{body}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 4,
    margin: 0 20
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

export default Post;
