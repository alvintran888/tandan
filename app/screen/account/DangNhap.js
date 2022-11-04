import React from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {Colors, Fonts, Images} from '@app/themes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createSerializableStateInvariantMiddleware} from '@reduxjs/toolkit';

const DangNhap = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      {/* Welcome */}
      <View style={styles.chao}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.welcomeText}>Back!</Text>
      </View>

      {/* Email điền vào*/}

      <View>
        <Text style={styles.email}>Email</Text>
        <TextInput placeholder="Email" style={styles.input} />

        <Text style={styles.email}>Password</Text>
        <TextInput placeholder="Password" style={styles.input} />

        {/* quen pass */}
        {/* <View style={{ height: 30, marginHorizontal: 10, marginTop: 10, alignItems: 'flex-end'}}>
                <Text>Forgot password ?</Text>
            </View> */}

        {/* nut quen mat khau */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Forgotpass');
            {
              /*trang  forgotpass có lẽ để sau*/
            }
          }}
          style={{height: 30, marginHorizontal: 10, marginTop: 10, alignItems: 'flex-end'}}>
          <Text style={{color: '#888888'}}>Forgot password ?</Text>
        </TouchableOpacity>

        {/* nut dang nhap */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TrangChu')
          }}
          style={{backgroundColor: '#3AC5C9', marginHorizontal: 20, borderRadius: 25}}>
          <Text style={{color: '#FFF', marginTop: 15, fontWeight: 'bold', textAlign: 'center', height: 40, fontSize:18}}>Sign In</Text>
        </TouchableOpacity>

        {/* dòng or countinue with */}

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginRight: 20, marginLeft: 20 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#3B3B3B' }} />
        <View>
          <Text style={{ width: 130, textAlign: 'center' }}>Or Countinue With</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
      </View>

        {/* <View style={{height: 30, marginHorizontal: 10, marginTop: 30, alignItems: 'center'}}>
          <Text>-----------Or Countinue With-----------</Text>
        </View> */}

{/* đăng nhập bằng gg, fb */}
<View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop:25 }}>
    {/* Apple */}
        <View style={styles.appLogin} >
            <FontAwesome name={'apple'} color={Colors.black} size={30} />
        </View>
        {/* FaceBook */}
        <View style={styles.appLogin} >
        <FontAwesome name={'facebook-f'} color={Colors.blue} size={30} />
        </View>
        {/* Google */}
        <View style={styles.appLogin} >
        <FontAwesome name={'google'} color={Colors.green} size={30} />
        
        </View>

      </View>
        {/* không có tài khoản */}
        <View style={{height: 30, marginHorizontal: 80, marginTop: 100, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text>Don't have an account?</Text>

        {/* đăng ký tài khoản mới */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('newAccount');
            {
              /*trang  newAccount có lẽ để sau*/
            }
          }}>
          <Text style={{color: '#3D6AD6'}}>Register now</Text>
        </TouchableOpacity>

        </View>
    
      </View>
    </View>
  );
};

export default DangNhap;

const styles = StyleSheet.create({
  chao: {
    marginTop: 50,
    marginLeft: 10,
  },
  email: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 20,
    color: '#3B3B3B',
    fontWeight: 'bold',
  },
  inputtren: {
    width: '90%',
    height: '50',
    backgroundColor: '#F5F5F5',
    fontSize: 20,
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  welcomeText: {
    color: '#3B3B3B',
    fontWeight: 'bold',
    fontSize: 40,
  },
  input: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 10,
  },
  appLogin: {
    height: 65, 
    width: 65, 
    backgroundColor: '#F5F5F5',
    alignItems: 'center',   
    justifyContent: 'center',
    borderRadius:20
  },
});
