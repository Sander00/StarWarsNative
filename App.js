import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Navigation from './src/components/Navigation/Navigation';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <View style={{flex: 1}}>
            <Navigation>
            </Navigation>
          </View>
        </Provider>
    )
  }
}

