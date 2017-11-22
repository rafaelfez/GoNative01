import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import '../config/ReacttotronConfig';

const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.author}>{post.author}</Text>
    <Text style={styles.description}>{post.description}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  postContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100,
    borderRadius: 6,
  },
  title: {
    fontWeight: 'bold',
    color: '#333333',
    fontSize: 18,
  },
  author: {
    color: '#999999',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  description: {
    color: '#666666',
  },
});

export default Post;
