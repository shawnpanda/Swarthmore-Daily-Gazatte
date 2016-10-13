import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Archive from './Archive'
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';

class Home extends Component {
  componentDidMount() {
    this.props.loadCategories()
  }

  render() {
    return (
    <ScrollableTabView
      style={{marginTop: 40, }}
      renderTabBar={() => <ScrollableTabBar />}
    >

      {this.props.fields && this.props.fields.map((tab, i)=> {
        return <Archive
          key={i}
          index={i}
          tabLabel ={`tab${i}`}
        />
      })}

    </ScrollableTabView>
    )
  }
}

Home.propTypes = {
  fields: PropTypes.array,
  loadCategories: PropTypes.func
}

export default Home
