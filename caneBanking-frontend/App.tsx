import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import RouterComponent from './src/router/router.component';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
            <NavigationContainer>
                <RouterComponent></RouterComponent>
            </NavigationContainer>
        </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
