import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Archive from './Archive'
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [1,2,3,4,5,6]
    }
  }
  render() {
    return (
    <ScrollableTabView
      style={{marginTop: 40, }}
      renderTabBar={() => <ScrollableTabBar />}
    >
      {this.state.tabs.map((tab, i)=> {
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

export default Home
