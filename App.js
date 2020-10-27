import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
  <Navigation />
  </View>
  </SafeAreaView>
   </>
  );
};


export default App;
