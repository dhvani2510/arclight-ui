// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Loader from './Components/Loader';
import AppStyles from '../styles/shared-styles'
import RegisterScreenStyles from '../styles/RegisterScreenStyles';

const RegisterScreen = (props) => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const lastnameInputRef = createRef();
  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  const confirmpasswordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userFirstName) {
      alert('Please fill First Name');
      return;
    }
    if (!userLastName) {
      alert('Please fill Last Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    if (!userConfirmPassword) {
      alert('Please fill Password');
      return;
    }
    if (userPassword !== userConfirmPassword) {
      alert('Passwords do not match');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = JSON.stringify(
      {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword
      });

    fetch('https://arclight.iverique.com/api/v1/auth/register', {
      method: 'POST',
      body: dataToSend,
      headers: {
        //Header Defination
        'Content-Type':
        'application/json;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == 200) {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
          props.navigation.replace('DrawerNavigationRoutes');
          props.navigation.navigate("ProfileScreen");
        } else {
          setErrortext(responseJson.message);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.jpg')}
          style={{
            height: 200,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={RegisterScreenStyles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={AppStyles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={AppStyles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Image/arclight.png')}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={AppStyles.SectionStyle}>
            <TextInput
              style={AppStyles.inputStyle}
              onChangeText={(UserFirstName) => setUserFirstName(UserFirstName)}
              underlineColorAndroid="#f000"
              placeholder="Enter First Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                lastnameInputRef.current &&
                lastnameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={AppStyles.SectionStyle}>
            <TextInput
              style={AppStyles.inputStyle}
              onChangeText={(UserLastName) => setUserLastName(UserLastName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Last Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={AppStyles.SectionStyle}>
            <TextInput
              style={AppStyles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={AppStyles.SectionStyle}>
            <TextInput
              style={AppStyles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                confirmpasswordInputRef.current &&
                confirmpasswordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={AppStyles.SectionStyle}>
            <TextInput
              style={AppStyles.inputStyle}
              onChangeText={(UserConfirmPassword) =>
                setUserConfirmPassword(UserConfirmPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Confirm Password"
              placeholderTextColor="#8b9cb5"
              ref={confirmpasswordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
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
            onPress={handleSubmitButton}>
            <Text style={AppStyles.buttonTextStyle}>Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;