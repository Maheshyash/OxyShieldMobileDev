import 'react-native-gesture-handler';
import {AppRegistry,LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-url-polyfill/auto';
LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
