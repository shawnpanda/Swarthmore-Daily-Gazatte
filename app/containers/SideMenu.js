import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return {
    ...state
  }
}

class SideMenu extends Component {
  _onPress() {
    console.log("button pressed")
  }

  render() {
    return (
      <View>
      {this.props.categories.fields.map((category, i)=> {
        return <TouchableHighlight key={i} onPress={this._onPress}>
          <Text>{category}</Text>
        </TouchableHighlight>
      })}
      </View>
    )
  }
}

export default connect(mapStateToProps)(SideMenu)
