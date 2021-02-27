//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

// create a component
const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext)

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title={"Add Blog Post"} onPress={addBlogPost} />
      </View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title}
              </Text>
              <Feather style={styles.icon} name='trash' color='red' />
            </View>
          )
        }} />
    </View>
  );
};

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
    fontSize: 24
  },
  button: {
    marginVertical: 30,
    marginHorizontal: 50
  }
});

//make this component available to the app
export default IndexScreen;
