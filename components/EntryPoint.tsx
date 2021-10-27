import React from 'react';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';
import About from './About';

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Overview',
          }}
        />
        <Stack.Screen
          name={'Details'}
          component={DetailsScreen}
          options={{
            title: 'Detailss',
          }}
          // options={({route}: any) => ({title: route.params?.name})}
        />
        <Stack.Screen
          name={'About'}
          component={About}
          options={{
            title: 'Detailss',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
