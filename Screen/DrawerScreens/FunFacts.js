import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-paper';

const FunFacts = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);


//   const API_URL = 'https://arclight.iverique.com/api/v1/funfact';

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
            .then(data => {
                console.warn(JSON.stringify(data));
                data.json();
            })
            .then(response => {
                console.warn("response: " + JSON.stringify(response));
                // setFacts(response.data);
                setLoading(false);
            });
  };

  const renderFunFact = ({ item }) => {
    return (
      <View style={{ marginVertical: 10 }}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={facts}
          renderItem={renderFunFact}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => <Text>No fun facts available.</Text>}
        />
      )}
      <Button mode="contained" onPress={fetchFunFacts} style={{ marginTop: 20 }}>
        Refresh Fun Facts
      </Button>
    </View>
  );
};

export default FunFacts;
