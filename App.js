import React from 'react';
import Navigation from './src/Navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
