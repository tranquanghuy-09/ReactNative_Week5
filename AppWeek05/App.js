import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/index.js';
import ChooseScreen from './screens/choosescolor.js';
import DetailScreen from './screens/detail.js';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ChooseColor' component={ChooseScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Detail' component={DetailScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}