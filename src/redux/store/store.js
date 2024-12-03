import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const rootreducer = combineReducers({
  users: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistantreducer = persistReducer(persistConfig, rootreducer);

const store = configureStore({
  reducer: persistantreducer,
  middleware: getdefaultmiddleware =>
    getdefaultmiddleware({serializableCheck: false}),
});

const persistedStore = persistStore(store);

export {store, persistedStore};
