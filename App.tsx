import React from 'react';
import {LanguageProvider} from './src/Context/LanguageProvider';
import Home from './src/Screens/Home'; // Your main component
import {SafeAreaView, StatusBar} from 'react-native';

function Root() {
  return (
    <SafeAreaView>
      <StatusBar />
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </SafeAreaView>
  );
}

export default Root;
