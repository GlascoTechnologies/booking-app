import React, {lazy, Suspense} from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const ShopScreen = lazy(() => import('./screens/ShopScreen'));
const SearchScreen = lazy(() => import('./screens/SearchScreen'));
const IndividualShopScreen = lazy(
  () => import('./screens/IndividualShopScreen'),
);

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="IndividualShop"
            component={IndividualShopScreen}
            options={{
              headerShown: false,
              animation: 'fade_from_bottom',
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
}
