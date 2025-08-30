import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
