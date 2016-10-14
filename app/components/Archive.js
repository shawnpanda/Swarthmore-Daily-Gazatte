import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

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
