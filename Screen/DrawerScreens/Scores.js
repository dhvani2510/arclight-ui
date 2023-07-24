import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import {View, Text, ActivityIndicator, SafeAreaView} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Scores = (screenWidth, screenHeight) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const access_token = await AsyncStorage.getItem('access-token');
        return await fetch('https://arclight.iverique.com/api/v1/quiz/scores' , {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer '+ access_token
            },
          })
          .then(data => {
            console.log(JSON.stringify(data));
            return data.json();
          })
          .then(response => {
            setCategories(response.data);
            setLoading(false);
          })
      };

      useEffect(() => {
        fetchData();
      }, []);
      const render = ({item}) => {
        console.log(item);
        return (
          <TouchableOpacity>
            <Text>Quiz {item.id}   Marks: {item.mark}/{item.total}</Text>
          </TouchableOpacity>
        );
      };

      if (loading) {
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
          );
      }

    return (
      <View style={{flex: 1, backgroundColor:'white'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{padding: 16}}>
        <FlatList
            contentContainerStyle={{justifyContent: 'space-between'}}
            style={{marginTop:16}}
            data={categories}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={render}
          />
        </View>
        </SafeAreaView>
        </View>
    );
};

export default Scores;