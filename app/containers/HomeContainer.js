import React, { Component } from 'react'
import {
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home'
import * as actions from '../actions/actions'
import { Map } from 'immutable'
import Archive from '../components/Archive'
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';


const testActions = [
  actions
]

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
                  .merge(...testActions)
                  .filter(value => typeof value === 'function')
                  .toObject();
  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  }
}

class HomeContainer extends Component {
  componentDidMount() {
    this.props.actions.loadCategories()
  }

  render(){
    return (
    <ScrollableTabView
      style={{marginTop: 40, }}
      renderTabBar={() => <ScrollableTabBar />}
    >

      {this.props.categories.loaded && this.props.categories.fields.map((category, i)=> {
        return <Archive
          key={i}
          index={i}
          categoryName={category}
          tabLabel ={category}
        />
      })}

    </ScrollableTabView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
