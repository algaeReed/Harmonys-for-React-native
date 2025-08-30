/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationBottomTabs} from './src/navigation/BottomTabs';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
