import React from 'react';
import { StyleSheet , useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './components/Footer';

export default function App() {
  let theme = useColorScheme();
  let style = theme === "light" ? styles.lightContainer : styles.darkContainer;
  return (
      <NavigationContainer style={style.footer}>
        <Footer></Footer>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},

lightContainer: {
  backgroundColor: '#d0d0c0',
},
 
darkContainer: {
  backgroundColor: '#ffd0c0',
},
footer: {
  position: 'absolute',
  borttom: '0'
}
});
