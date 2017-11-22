import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import './config/ReacttotronConfig';

import Post from './components/Post';

export default class App extends Component {
  state = {
    post: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Rafael Felipe Silva',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ipsum a mi suscipit dignissim. Vivamus posuere pulvinar turpis, vitae ornare lectus auctor sed.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Rafael Felipe Silva',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ipsum a mi suscipit dignissim. Vivamus posuere pulvinar turpis, vitae ornare lectus auctor sed.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Rafael Felipe Silva',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ipsum a mi suscipit dignissim. Vivamus posuere pulvinar turpis, vitae ornare lectus auctor sed.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Rafael Felipe Silva',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ipsum a mi suscipit dignissim. Vivamus posuere pulvinar turpis, vitae ornare lectus auctor sed.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>GoNative App</Text>
        </View>
        <View style={styles.posts}>
          <ScrollView>
            { this.state.post.map(post => <Post key={post.id} post={post} />) }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  cabecalho: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100,
  },
  textoCabecalho: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  posts: {
    flex: 10,
  },
});
