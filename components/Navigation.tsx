import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Screens/Home';
import { Cart } from './Screens/Cart';
import CartIcon from './CartIcon';
import { SinglePost } from './Screens/SinglePost';
import Profile from './Screens/Profile';
import { TestProducts } from './Screens/TestProducts';
import Authorization from './Screens/Auth';
import RedactUser from './Screens/RedactUser';
import { Checkout } from './Screens/Checkout';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={({ navigation }) => ({
            headerRight: () => <CartIcon navigation={navigation} />,
          })}/>
        <Tab.Screen name="Profile" component={Profile} options={({ navigation }) => ({
            headerRight: () => <CartIcon navigation={navigation} />,
          })}/>
      </Tab.Navigator>
    );
}

export const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <NavigationContainer>
        {isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen name="Tabs" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="SinglePost" component={SinglePost} options={({ navigation }) => ({
            headerRight: () => <CartIcon navigation={navigation} />,
          })}/>
            <Stack.Screen name="RedactUser" component={RedactUser} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Checkout" component={Checkout} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Authorization"
              component={() => <Authorization setIsLoggedIn={setIsLoggedIn} />}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
}
// kminchelle
// 0lelplR