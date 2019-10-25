import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import WelcomeScreen from './screens/WelcomeScreen';

const dimensions = Dimensions.get('window');

const styles = {
  container: {
    width: dimensions.width,
    height: dimensions.height,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WelcomeScreen />
      </View>
    );
  }
}
