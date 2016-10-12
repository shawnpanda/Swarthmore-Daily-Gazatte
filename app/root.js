import React, { Component } from 'react';
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'

let store = configureStore()

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root
