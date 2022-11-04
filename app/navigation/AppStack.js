import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen} from '@app/screen/loaidichvu';
import DangNhap from '@app/screen/account/DangNhap';
import { TrangChu } from '@app/screen/account';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'DangNhap'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="DangNhap" component={DangNhap} />
      <Stack.Screen name="HomeScreen" component={AppBottomTab} />
      <Stack.Screen name="ListLoaiDichVuScreen" component={ListLoaiDichVuScreen} />
      <Stack.Screen name="TrangChu" component={TrangChu} />
    </Stack.Navigator>
  );
};

export default AppStack;
