import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-paper';

const FunFacts = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFunFacts();
  }, []);

  const fetchFunFacts = async () => {
    const access_token = await AsyncStorage.getItem('access-token');
    return fetch('https://arclight.iverique.com/api/v1/funfact' , {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer '+ access_token
      },
    })
    .then(data => data.json())
    .then(response => {
        setFacts(response.data);
        console.warn(facts);
        setLoading(false);
    });
  };

  const renderFunFact = ({ item }) => {
    return (
      <View style={{ marginVertical: 10 }}>
        <Text>{item.data.description}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
      <View style={{ marginVertical: 10 }}>
        <Text>{facts.description}</Text>
      </View>
      )}
      <Button mode="contained" onPress={fetchFunFacts} style={{ marginTop: 20 }}>
        Refresh Fun Facts
      </Button>
    </View>
  );
};

export default FunFacts;
