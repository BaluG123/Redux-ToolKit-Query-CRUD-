import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {persistedStore, store} from './src/redux/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
