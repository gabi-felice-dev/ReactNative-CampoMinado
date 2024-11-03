import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import params from './src/param';
import Field from './src/components/Field';
import Header from './src/components/Header';
import Flag from './src/components/Flag';
import Mine from './src/components/Mine';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Flag />
        <Flag bigger={true} />
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened exploded />
        <Field mined opened />
        <Field flagged />
        <Field opened flagged />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});