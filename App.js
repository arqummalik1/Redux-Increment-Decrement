import React from 'react';
import {Text} from 'react-native'
import AppTwo from './AppTwo';
import store from './redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <AppTwo/>
    </Provider>
  );
};


