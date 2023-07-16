import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateField from 'react-native-datefield';
import RNPickerSelect from 'react-native-picker-select';
import ProfileUpdateScreenStyles from '../styles/ProfileUpdateScreenStyles';

const ProfileUpdateScreen = () => {
  const profile = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    date: '2020-05-20',
    avatar: 'https://example.com/jane-doe-avatar.png',
    primarylanguage: "English",
  }
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [avatar, setAvatar] = useState(profile.avatar);
  const [date, setDate] = useState(profile.date);
  const [primarylanguage, setPrimaryLanguage] = useState(profile.primarylanguage);

  const handleSubmit = () => {
    console.log("profile updated");
  }

  return (
    <View style={ProfileUpdateScreenStyles.container}>
      <View style={ProfileUpdateScreenStyles.avatarContainer}>
        <Image
          style={ProfileUpdateScreenStyles.avatar}
          source={{uri: 'https://www.bootdey.com/img/Content/avatar/avatar3.png'}}
        />
        <TouchableOpacity style={ProfileUpdateScreenStyles.changeAvatarButton} onPress={() => {/* open image picker */}}>
          <Text style={ProfileUpdateScreenStyles.changeAvatarButtonText}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>
      <View style={ProfileUpdateScreenStyles.form}>
        <Text style={ProfileUpdateScreenStyles.label}>First Name</Text>
        <TextInput
          style={ProfileUpdateScreenStyles.input}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={ProfileUpdateScreenStyles.label}>Last Name</Text>
        <TextInput 
          style={ProfileUpdateScreenStyles.input}
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={ProfileUpdateScreenStyles.label}>Email</Text>
        <TextInput editable={false}
          style={ProfileUpdateScreenStyles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={ProfileUpdateScreenStyles.label}>Primary Language</Text>
          <TextInput editable={false}
            style={ProfileUpdateScreenStyles.input}
            placeholder="Enter Primary Language"
            value={primarylanguage}
            onChangeText={setPrimaryLanguage}
          />
          <Text style={ProfileUpdateScreenStyles.label}>Secondary Language</Text>
        <RNPickerSelect
        
            style={ProfileUpdateScreenStyles.input}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'French', value: 'french' },
                { label: 'Hindi', value: 'hindi' },
                { label: 'None', value: 'none' },
            ]}
        />
        <Text style={ProfileUpdateScreenStyles.label}>Date of Birth</Text>
        <DateField
          onSubmit={setDate}
          // defaultValue={date}
          styleInput={{ fontSize: 15 }}
          containerStyle={{ marginVertical: 20 }}
        />

        <TouchableOpacity style={ProfileUpdateScreenStyles.button} onPress={() => handleSubmit({firstName, lastName, email, date, avatar})}>
          <Text style={ProfileUpdateScreenStyles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


export default ProfileUpdateScreen;