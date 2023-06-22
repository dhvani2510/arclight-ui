import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Appearance , useColorScheme } from 'react-native';

export default function App() {
  let theme = useColorScheme();
  let style = theme === "light" ? styles.lightContainer : styles.darkContainer;
  return (
    <View style={[styles.container, style]}>
      <Text>hello!!</Text>
      <StatusBar style="auto" />
    </View>
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
}
});
