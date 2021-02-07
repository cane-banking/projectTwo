import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import RouterComponent from './src/router/router.component';
import store from './src/store/store';

enableScreens();

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
