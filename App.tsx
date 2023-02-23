import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useUserStore } from './src/store/userStore';
import { ColorConstants, FontConstants } from './src/constants/StyleConstants';
import { LoginStackParamList } from './src/@types/Stacks';

import Home from './src/views/home/Home';
import Login from './src/views/login/Login';
import Signup from './src/views/signup/Signup';
import ForgotPassword from './src/views/forgot-password/ForgotPassword';
import Settings from './src/views/settings/Settings';

import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginStack = createNativeStackNavigator<LoginStackParamList>();
const Tab = createBottomTabNavigator();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorConstants.background,
        },
        headerTintColor: ColorConstants.font,
        headerTitleStyle: {
          fontWeight: FontConstants.weightBold,
        },
      }}>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name="Signup"
        component={Signup}
        options={{ title: '' }}
      />
      <LoginStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ title: '' }}
      />
    </LoginStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = '';

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

const App = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn)
  const token = useUserStore((state) => state.token)

  return (
    <NavigationContainer>
      {isLoggedIn() ? <BottomTabNavigator /> : <LoginStackScreen />}
    </NavigationContainer>
  );
}

export default App;
