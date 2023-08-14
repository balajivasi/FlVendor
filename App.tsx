import React from 'react';
import {LanguageProvider} from './src/Context/LanguageProvider';
import Home from './src/Screens/Home'; // Your main component
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Store/Store';

function Root() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Provider store={store}>
        <LanguageProvider>
          <Home />
        </LanguageProvider>
      </Provider>
    </SafeAreaView>
  );
}

export default Root;
