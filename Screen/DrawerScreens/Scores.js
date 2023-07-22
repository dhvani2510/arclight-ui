import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';

const Scores = () => {
    useEffect(() => {
        fetchScores();
      }, []);
  
      const fetchScores = async () => {
          const access_token = await AsyncStorage.getItem('access-token');
          return fetch('https://arclight.iverique.com/api/v1/quiz/scores/' , {
              method: 'GET',
              headers: {
                  'Authorization': 'Bearer '+ access_token
              },
              })
              .then(data => {
                data.json();
              })
              .then(response => {
                  setQuestions(response.data);
                  setLoading(false);
              });
      };
    return (
        <View style={{padding: 16}}>
            <Text>Scores</Text>
        </View>
    );
};

export default Scores;