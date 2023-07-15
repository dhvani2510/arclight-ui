import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateField from 'react-native-datefield';


const ProfileUpdateScreen = () => {
  const profile = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    date: '2020-05-20',
    avatar: 'https://example.com/jane-doe-avatar.png',
  }
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [avatar, setAvatar] = useState(profile.avatar);
  const [date, setDate] = useState(profile.date);

  const handleSubmit = () => {
    console.log("profile updated");
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://www.bootdey.com/img/Content/avatar/avatar3.png'}}
        />
        <TouchableOpacity style={styles.changeAvatarButton} onPress={() => {/* open image picker */}}>
          <Text style={styles.changeAvatarButtonText}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput editable={false}
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
      
      <Text style={styles.label}>Date of Birth</Text>
      <DateField
        onSubmit={setDate}
        // defaultValue={date}
        styleInput={{ fontSize: 15 }}
        containerStyle={{ marginVertical: 20 }}
      />

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit({firstName, lastName, email, date, avatar})}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'gold',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarButton: {
    marginTop: 10,
  },
  changeAvatarButtonText: {
    color: '#1E90FF',
    fontSize: 18,
  },
});

export default ProfileUpdateScreen;