import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AppStyles from '../../styles/shared-styles';
import { ScrollView } from 'react-native-gesture-handler';

const FunFacts = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFunFacts();
  }, []);

  const fetchFunFacts = async () => {
    setLoading(true);
    const access_token = await AsyncStorage.getItem('access-token');
    return fetch('https://arclight.iverique.com/api/v1/funfact' , {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer '+ access_token
      },
    })
    .then(data => data.json())
    .then(response => {
      
     response.data.description='Water boils at 100 degree celsius';
        setFacts(response.data);
        setLoading(false);
    });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <View style={{flex:1}}> 
      <ScrollView style={{ flex: 1,  marginVertical: 20, padding:10 }}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>{facts.description}</Text>
      </ScrollView>
       <View style={{ alignSelf: 'center', marginBottom: 20 }}></View>
       <TouchableOpacity style={AppStyles.buttonStyle} onPress={fetchFunFacts}>
           <Text style={AppStyles.buttonTextStyle}>Refresh Fun Facts</Text>
         </TouchableOpacity>
         </View>
      )}
     
    </View>
  );
};

export default FunFacts;
