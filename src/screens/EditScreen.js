//import liraries
import React, { Component, useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

// create a component
const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={async (title, content) => {
        try {
          await editBlogPost(id, title, content);
          navigation.pop();
        } catch (e) {
          console.error(e);
        }
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
export default EditScreen;
