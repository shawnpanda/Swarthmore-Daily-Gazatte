import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return {
    ...state
  }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Archive extends Component {
  componentDidMount() {
    this.props.loadPosts()
  }

  render(){
    return (
      <ListView
        dataSource={ds.cloneWithRows(this.props.categories.posts)}
        renderRow={this._renderRow}
        enableEmptySections={true}
      />
    )
  }

  _renderRow(post) {
    return (
      <TouchableHighlight>
        <View>
          <Text>{post}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default connect(mapStateToProps)(Archive)
