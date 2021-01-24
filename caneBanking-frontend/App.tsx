import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import RouterComponent from './src/router/router.component';
import store from './src/store/store';

export default function App() {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>welcome to react-native</Text>
      <StatusBar style="auto" />
    </View>
=======
    <Provider store={store}>
            <NavigationContainer>
                <RouterComponent></RouterComponent>
            </NavigationContainer>
        </Provider>

>>>>>>> 7491e709d6a1e97b02eaa0a1432a0a3870d91f9d
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
