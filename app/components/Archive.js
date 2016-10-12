import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

class Archive extends Component {
  render(){
    return (
      <ScrollView>
        <Text>Archive Page</Text>
        <Text>Index is {this.props.index}</Text>
      </ScrollView>
    )
  }
}

export default Archive
