import React from 'react';
import { StyleSheet, } from 'react-native';
import Index from './src/index'
import Utils from './src/utils'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Utils}>
        <Index />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9ecef',
  },
});