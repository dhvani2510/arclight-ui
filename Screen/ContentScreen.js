import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../styles/QuizStyles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import ContentItem from '../Screen/Components/ContentItem'

const ContentScreen = ({ route }) => {
  const { category } = route.params;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Make an API call to fetch data for the selected category
  const fetchData = async () => {
    const access_token = await AsyncStorage.getItem('access-token');
    return await fetch('https://arclight.iverique.com/api/v1/basic-learning/category/'+category , {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer '+ access_token
        },
      })
      .then(data => data.json())
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
  };

  useEffect(() => {
    fetchData();
  }, [categories]);

  const handleNext = () => {
    if (currentCategoryIndex < categories.length - 1) {
      setCurrentCategoryIndex((prevIndex) => prevIndex+1);
    }
  };

  const handlePrevious = () => {
    if (categories.length > 0) {
      setCurrentCategoryIndex((prevIndex) => prevIndex-1);
    }
  };

  const currentQuestion = categories[currentCategoryIndex];
    const totalQuestions = categories.length;
    const currentQuestionNumber = currentCategoryIndex + 1;
    const quizProgress = (currentQuestionNumber / totalQuestions) * 100;

    const render = ({item}) => {
      return (
        <ContentItem question={item} />
      );
    }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
     <FlatList
            contentContainerStyle={{justifyContent: 'space-between'}}
            style={{marginTop:16, flex: 1}}
            data={categories}
            keyExtractor={(item,index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={render}
            pagingEnabled={true}
          />
      </View>
  );
};

export default ContentScreen;
