import React, { SFC } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';


const TitleBar: SFC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tincture</Text>
      <Text>The Natural Solution</Text>
    </View>
  );
};

export default TitleBar;