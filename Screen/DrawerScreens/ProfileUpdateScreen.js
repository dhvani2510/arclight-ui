import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import ProfileUpdateScreenStyles from '../../styles/ProfileUpdateScreenStyles';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import SelectDropdown from 'react-native-select-dropdown'
import AsyncStorage from '@react-native-community/async-storage';

const ProfileUpdateScreen = () => {
  useEffect(() => {
    AsyncStorage.getItem("access-token")
    .then((value) => {
      accessToken = value;
      setToken(accessToken);
    });
    AsyncStorage.getItem("user")
    .then((res) => {
      user = JSON.parse(res);
      setProfile(user);
    });
  }, [])

  const [profile, setProfile] = React.useState([]); 
  const [loading, setLoading] = useState(false);
  let [token,setToken] = useState(null);

  const handleFirstNameChange = (value) => {
    setProfile({
      ...profile,
      firstName: value
    });
  }

  async function updateProfile(data)  {
    return fetch('https://arclight.iverique.com/api/v1/users/profile', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer '+ token
    },
    body: data
  })
  .then(data => data.json());
}

  const handleLastNameChange = (value) => {
    setProfile({
      ...profile,
      lastName: value
    });
  }

  const handleSecondaryLanguageChange = (value) => {
    setProfile({
      ...profile,
      secondaryLanguage: value
    });
  }

  const handleBirthDateChange = (value) => {
    setProfile({
      ...profile,
      birthDate: value.toString()
    });
  }

  const handleSubmit = async(profile) => {
    setLoading(true);
    let data = new FormData();
    data.append("firstName", profile.firstName);
    data.append("lastName", profile.lastName);
    data.append("secondaryLanguage", profile.secondaryLanguage);
    data.append("birthDate", profile.birthDate);

    if(profile.Image) {
      data.append("image", profile.image);
    }

    const response = await updateProfile(data);
    setLoading(false);
    if(response.status == 200) {
      AsyncStorage.setItem('user', JSON.stringify(response.data));
      setProfile(response.data);
    }
    else
      console.error(response.message);
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    date = new Date(date);
    handleBirthDateChange(date.toISOString().split('T')[0]);
    hideDatePicker();
  };

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
          value={profile.firstName}
          onChangeText={handleFirstNameChange}
        />
        <Text style={ProfileUpdateScreenStyles.label}>Last Name</Text>
        <TextInput 
          style={ProfileUpdateScreenStyles.input}
          placeholder="Enter Last Name"
          value={profile.lastName}
          onChangeText={handleLastNameChange}
        />
        <Text style={ProfileUpdateScreenStyles.label}>Email</Text>
        <TextInput editable={false}
          style={ProfileUpdateScreenStyles.input}
          placeholder="Enter Email"
          value={profile.email}
        />
        <Text style={ProfileUpdateScreenStyles.label}>Primary Language</Text>
          <TextInput editable={false}
            style={ProfileUpdateScreenStyles.input}
            placeholder="Enter Primary Language"
            value={'English'}
          />
          <Text style={ProfileUpdateScreenStyles.label}>Secondary Language</Text>
          <SelectDropdown
            buttonStyle={ProfileUpdateScreenStyles.selectInput}
            defaultButtonText='Select Secondary language'
            data={['French', 'Hindi']}
            defaultValue={profile.secondaryLanguage}
            onSelect={handleSecondaryLanguageChange}
          />
        <Text style={ProfileUpdateScreenStyles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            onKeyPress={() => {return null;}}
            style={ProfileUpdateScreenStyles.input}
            value={profile.birthDate}
            onTouchEnd={showDatePicker}
            showSoftInputOnFocus={false}
          />
           <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={new Date(Date.now())}
          />
        </TouchableOpacity>
        <TouchableOpacity style={ProfileUpdateScreenStyles.button} onPress={() => handleSubmit(profile)}>
          <Text style={ProfileUpdateScreenStyles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


export default ProfileUpdateScreen;