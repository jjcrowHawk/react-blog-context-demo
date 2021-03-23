//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { useEffect } from 'react';

// create a component
const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext)

  useEffect(() => {
    getBlogPosts();


    const listener= navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name='trash' color='red' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }} />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather style={styles.headerIcon} name="plus" size={30} />
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
  row: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'

  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 28
  },
  button: {
    marginVertical: 30,
    marginHorizontal: 50
  },
  headerIcon: {
    marginRight: 10
  }
});

//make this component available to the app
export default IndexScreen;
