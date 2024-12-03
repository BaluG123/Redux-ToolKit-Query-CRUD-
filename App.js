import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
