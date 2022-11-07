import React from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {Colors, Fonts, Images} from '@app/themes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createSerializableStateInvariantMiddleware} from '@reduxjs/toolkit';

const TrangChu = () => {
  const navigation = useNavigation();
  return (
    // cục màu xanh chứa th người
    <View style={styles.background}>
      <View style={{flex: 1, backgroundColor: '#3AC5C9', borderRadius: 30}}>
        {/* nút quay lại */}
        <View style={styles.return}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesome name={'arrow-left'} color={Colors.white} size={25} />
          </TouchableOpacity>
        </View>

        {/* chia phần trong cục màu xanh */}
        <View style={{flex: 8, flexDirection: 'row'}}>
          {/* ảnh th người */}
          <View style={styles.human}>
            <Image source={require('@app/assets/images/Human.png')} />
          </View>

          {/* ảnh chữ */}
          <View style={styles.chutopbest}>
            <Image source={require('@app/assets/images/nhahang.png')} />
          </View>
        </View>
      </View>

      <View style={{flex: 2}}>
        {/* ảnh đầu */}
        <View style={{flexDirection: 'row'}}>
          {/* ảnh */}
          <View style={{flex: 2, marginTop: 20, marginLeft: 10}}>
            <Image source={require('../../assets/images/anhhai.png')} />
          </View>

          {/* chữ */}
          <View style={{flex: 4}}>
            <Text style={styles.tennhahang}>LongHorn Steakhouse</Text>
            <Text style={{fontSize: 17, marginTop: 5, color: "#3B3B3B"}}>3605 Parker Rd.</Text>

            {/* đánh giá */}
            <View style={{flexDirection:"row"}}>
              <View style={styles.ngoisaodanhgia}>
            <Image source={require('../../assets/images/ngoisao.png')} />
            </View>

            <View style={styles.sosaodanhgia}>
            <Text style={{color: "#010101",fontSize:14}}>4.4</Text>
            </View>

            </View>
          </View>
        </View>

        {/* ảnh hai */}
        <View style={{flex: 2}}></View>

        {/* ảnh ba */}
        <View style={{flex: 2}}></View>

        {/* ảnh bốn */}
        <View style={{flex: 2}}></View>

        {/* ảnh năm */}
        <View style={{flex: 2}}></View>
      </View>
    </View>
  );
};

export default TrangChu;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  return: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    marginTop: 30,
  },
  human: {
    flex: 4,
    height: 30,
    width: '100%',
    marginLeft: 250,
  },
  chutopbest: {
    flex: 6,
    marginTop: 45,
    height: 100,
    width: 50,
    color: '#FFFFFF',
    position: 'absolute',
    marginLeft: 20,
  },

  tennhahang: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
    color: '#010101',
    fontWeight: 'bold',
  },

  // chudiachi: {
  //   fontSize: 17,
  //   marginTop: 5,
  //   color: ' #3B3B',
  // },

  ngoisaodanhgia: {
    marginTop: 5,
    flex: 0.7,
    
  },

  sosaodanhgia:{
    marginTop: 5,
    flex:6,
    
  },
});
// <View style={{flex: 1, backgroundColor: '#FFF'}}>
//     <TouchableOpacity onPress={() => {
//         navigation.goBack();
//     }}>
//         <Text>Back</Text>
//     </TouchableOpacity>
// </View> quay lại trang login
