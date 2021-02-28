//import liraries
import React, { Component, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'
// create a component
const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext)
  return (
    <BlogPostForm onSubmit={(title, content) => {
      addBlogPost(title, content)
        .then(() => {
          navigation.navigate('Index')
        })
    }} />
  )
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 10
  }
});

//make this component available to the app
export default CreateScreen;
