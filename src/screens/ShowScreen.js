//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'
// create a component
const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(BlogContext);

  const blogPost = state.find((post) => post.id === id)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
          <EvilIcons style={styles.headerIcon} name="pencil" size={30} />
        </TouchableOpacity>
      )
    }
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 24,
    marginVertical: 10
  },
  content: {
    backgroundColor: 'white',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 2,
    padding: 8,
    paddingBottom: 20,
    marginTop: 15,
    marginHorizontal: 10
  }
});

//make this component available to the app
export default ShowScreen;
