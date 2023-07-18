import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import ProfileUpdateScreenStyles from '../styles/ProfileUpdateScreenStyles';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import SelectDropdown from 'react-native-select-dropdown'
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
  const [secondaryLangauge, setSecondaryLanguage] = useState(profile.secondaryLangauge);

  const handleSubmit = () => {
    console.log("profile updated");
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
    setDate(date.toISOString().split('T')[0]);
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
          <SelectDropdown
            buttonStyle={ProfileUpdateScreenStyles.selectInput}
            defaultButtonText='Select Secondary language'
            data={['french', 'hindi', 'none']}
            value={secondaryLangauge}
            onConfirm={setSecondaryLanguage}
          />
        <Text style={ProfileUpdateScreenStyles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            onKeyPress={() => {return null;}}
            style={ProfileUpdateScreenStyles.input}
            value={date}
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
        <TouchableOpacity style={ProfileUpdateScreenStyles.button} onPress={() => handleSubmit({firstName, lastName, email, date, avatar})}>
          <Text style={ProfileUpdateScreenStyles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


export default ProfileUpdateScreen;