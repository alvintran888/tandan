import React from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';

const MAIN_HomeScreen = () => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={'dots-horizontal'} onPress={() => {}} />
      </Appbar.Header>
      <Text>Trang chủ</Text>
    </View>
  );
};

export default MAIN_HomeScreen;
