import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
export default function Registeration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');	
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        // Perform registration logic here
        Alert.alert('Registration Successful!');
      } else {
        Alert.alert('Passwords do not match');
      }
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};
