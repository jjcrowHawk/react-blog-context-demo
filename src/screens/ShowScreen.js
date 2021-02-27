//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext'
// create a component
const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(BlogContext);

  const blogPost = state.find((post) => post.id === id)

  return (
    <View style={styles.container}>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ShowScreen;
