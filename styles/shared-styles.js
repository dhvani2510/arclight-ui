import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
    buttonStyle: {    // main buttons 
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
      buttonstyle: {     
        backgroundColor: 'gold',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginHorizontal: 5,
      },
      submitbuttonstyle: {   
        backgroundColor: 'limegreen',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginHorizontal: 5,
      },
      SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
      },
      buttonTextStyle: {
        color: 'white',
        paddingVertical: 8,
        fontWeight: 'bold',
        fontSize: 16,
      },
      buttontextStyle: {
        color: 'black',
        paddingVertical: 10,
        fontSize: 16,
      },
      inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'gold',
      },
      errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
      },
});

export default AppStyles;