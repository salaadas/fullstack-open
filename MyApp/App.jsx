import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Scroll from './components/TestingScrollView';

export default function App() {
  return (
    <View style={styles.container}>
      <Scroll />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
  },
});
