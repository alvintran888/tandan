import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {SignInScreen, SignInEmailScreen, SignUpScreen, ForgotScreen, ChangePasswordScreen, dangnhap} from '@app/screen/account';
import MAIN_HomeScreen from '@app/screen/home/MAIN_SettingScreen';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'MAIN_HomeScreen'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="MAIN_HomeScreen" component={MAIN_HomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignInEmailScreen" component={SignInEmailScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
