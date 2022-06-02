import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes'
import { StatusBar } from 'react-native';

const App = () => {
  let [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('./assets/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='white'/>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
