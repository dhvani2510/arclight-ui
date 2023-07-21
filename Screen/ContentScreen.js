import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let [token,setToken] = useState(null);

  const fetchAccessToken = async () => {
    try {
      const token = await AsyncStorage.getItem('access-token');
      setToken(token);
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };
  // Make an API call to fetch data for the selected category
  const fetchData = async () => {
    const access_token = await AsyncStorage.getItem('access-token');
    console.warn("token: " +access_token);
    console.warn("category: " +category);
      return fetch('https://arclight.iverique.com/api/v1/basic-learning/category/'+category , {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer '+ access_token
        },
        
      })
      .then(data => data.json())
      .then(response => {
        console.log("response: " + JSON.stringify(response));
        setData(response.data)
      })

  };

  useEffect(async() => {
    fetchAccessToken();
    const response = fetchData();
    console.warn(JSON.stringify(response));
  }, [category]);

  return (
    <SafeAreaView>
      <Text>{category} Data:</Text>
      {data.map((item) => (
        <Text key={item.id}>{item.description}</Text>
      ))}
    </SafeAreaView>
  );
};

export default CategoryScreen;
