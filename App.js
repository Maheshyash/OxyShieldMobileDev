import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigations} from './src/Navigations/DrawerNavigations';
import colors from './src/assets/theme/colors';
import store from './src/redux/Store/store';
import {Provider} from 'react-redux';
import { persistor } from './src/redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.primary1}/>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <DrawerNavigations />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
