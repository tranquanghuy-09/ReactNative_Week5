import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/index.js';
import ChooseScreen from './screens/choosescolor.js';
import DetailScreen from './screens/detail.js';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='ChooseColor' component={ChooseScreen}/>
        <Stack.Screen name='Detail' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}