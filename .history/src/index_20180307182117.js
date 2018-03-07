import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import Post from 'components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Gabriel Buzzi Venturi',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sed lorem vel egestas.',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Gabriel Buzzi Venturi',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sed lorem vel egestas.',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Gabriel Buzzi Venturi',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sed lorem vel egestas.',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Gabriel Buzzi Venturi',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sed lorem vel egestas.',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Gabriel Buzzi Venturi',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sed lorem vel egestas.',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Gabriel Buzzi Venturi',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sed lorem vel egestas.',
      },
    ],
  };

  componentDidMount() {
    console.tron.log('something');
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.header}>Go Native App</Text> */}

        <ScrollView>
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              body={post.body}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE7777',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-arround',
    alignItems: 'center',
  },

  header: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
    backgroundColor: '#FFF',
    padding: 20,
  },
});
