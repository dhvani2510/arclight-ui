import { StyleSheet } from "react-native";

const ProfileUpdateScreenStyles = StyleSheet.create({
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
      borderColor: 'gold',
      borderWidth: 1,
      borderRadius: 30,
      padding: 8,
      fontSize: 16,
    },
    button: {
        backgroundColor: 'gold',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: 'gold',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        paddingVertical: 8,
        fontWeight: 'bold',
        fontSize: 16,
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
  
export default ProfileUpdateScreenStyles;