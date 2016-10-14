import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';
import Drawer from 'react-native-drawer'
import HomeContainer from '../containers/HomeContainer'
import SideMenu from '../containers/SideMenu'

const routes = [
  {name: 'Home', index: 0, component: HomeContainer}
]

class App extends Component {
  renderScene(route, nav) {
    console.log('RENDER SCENE', route);
    const Component = route.component;
    return (<Component route={route} navigator={nav} title='Home' {...this.props}/>);
  }

  render() {
    return (
      <Drawer
      ref={(ref) => this._drawer = ref}
      type="overlay"
      content={<SideMenu />}
      tapToClose={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
        >
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={this.renderScene}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) =>
                 { return (
                   <TouchableHighlight onPress={()=> this._drawer.open()}>
                     <Text>Drawer</Text>
                   </TouchableHighlight>
                 ); },
                RightButton: (route, navigator, index, navState) =>
                  { return (null); },
                Title: (route, navigator, index, navState) =>
                  { return (null); },
              }}
              style={{height: 30}}
            />
          }
        />
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

export default App
