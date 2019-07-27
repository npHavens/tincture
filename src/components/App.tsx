import React, { SFC } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import TitleBar from './TitleBar/TitleBar';

const App: SFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;