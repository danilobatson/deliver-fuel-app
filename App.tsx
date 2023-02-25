import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, RestaurantScreen } from './src/screens';
import { RootStackParamList } from './src/types';

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HeaderRight, HeaderLeft } from './src/components';

const Stack = createNativeStackNavigator<RootStackParamList>();

const homeScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitle: '',
  headerLeft: () => <HeaderLeft />,
  headerRight: () => <HeaderRight />,
};
const restaurantScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitle: 'Restaurant',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={homeScreenOptions}
        />
        <Stack.Screen
          name='Restaurant'
          component={RestaurantScreen}
          options={restaurantScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
