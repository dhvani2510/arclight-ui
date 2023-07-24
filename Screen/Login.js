import React, {useState, createRef} from 'react';
import { TextInput, View, Text, ScrollView, Image, Keyboard, 
  TouchableOpacity, KeyboardAvoidingView, useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Loader from './Components/Loader';
import AppStyles from '../styles/shared-styles';
import LoginScreenStyles from '../styles/LoginScreenStyles';
import ProfileUpdateScreen from './DrawerScreens/ProfileUpdateScreen';
import { useNavigation } from '@react-navigation/native';

async function loginUser(credentials){
  return fetch('https://arclight.iverique.com/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: credentials
  })
    .then(data => data.json())
}

async function getUserProfle(accesstoken){
  return fetch('https://arclight.iverique.com/api/v1/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ accesstoken
    },
  })
    .then(data => data.json())
}

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const navigation = useNavigation();
  const windowDimensions = useWindowDimensions();
  const isPortrait = windowDimensions.height > windowDimensions.width;

  const passwordInputRef = createRef();

  const handleSubmitPress = async e => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = JSON.stringify({
      email: userEmail,
      password: userPassword
    });

    const response = await loginUser(dataToSend);
    if(response.status == 200) {
      let profile = await getUserProfle(response.data.token);
      AsyncStorage.setItem("access-token", response.data.token);
      AsyncStorage.setItem("user", JSON.stringify(profile.data));
      navigation.navigate('App');
      ProfileUpdateScreen.bind(profile, JSON.parse(profile.data));
    }
    else
      setErrortext(response.message);
    setLoading(false);
  };

  return (
   <ScrollView style={[LoginScreenStyles.mainBody, isPortrait && AppStyles.portraitStyles]} >
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{flex:1}}>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Image/logo.jpg')}
                style={{
                  width: '200%',
                  height: 250,
                  width: '200%',
                  height: 250,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={AppStyles.SectionStyle}>
              <TextInput
                style={AppStyles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={AppStyles.SectionStyle}>
              <TextInput
                style={AppStyles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={AppStyles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={AppStyles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={AppStyles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
            <Text
              style={LoginScreenStyles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New to Arclight ? Join Now
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </ScrollView>
  );
};
export default LoginScreen;

