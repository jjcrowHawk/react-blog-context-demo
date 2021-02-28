//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

// create a component
const BlogPostForm = ({ onSubmit, initialValues }) => {
  console.log(initialValues)
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Enter content: </Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

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
export default BlogPostForm;
