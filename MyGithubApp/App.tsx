/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Header from './src/components/Header'
import {
  StyleSheet,
} from 'react-native';

const App: () => Node = () => {
  return (
    <Header />
  );
};

const styles = StyleSheet.create({
});

export default App;
