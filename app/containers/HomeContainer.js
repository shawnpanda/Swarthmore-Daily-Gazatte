import React, { Component } from 'react'
import {
  Text,
  TouchableHighlight
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import { Map } from 'immutable'
import Archive from '../components/Archive'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';


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
      style={{marginTop: 30, }}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >

      {this.props.categories.fields.map((category, i)=> {
        return <Archive
          i={i}
          key={i}
          index={i}
          categoryName={category}
          tabLabel ={category}
          loadPosts={this.props.actions.loadPosts}
        />
      })}

    </ScrollableTabView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
