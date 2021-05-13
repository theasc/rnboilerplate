import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from '../screen/home.screen';

const Stack = createStackNavigator();

export function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
