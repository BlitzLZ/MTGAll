import { registerRootComponent } from 'expo';

import App from './App';
import InicioScreen from './src/views/InicioScreen';
import HomeScreen from './src/views/HomeScreen';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(HomeScreen);
