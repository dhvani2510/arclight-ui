import React, { useEffect, useState } from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { Image } from 'react-native';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
     
    useEffect(() => {
      fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        const access_token = await AsyncStorage.getItem('access-token');
        return fetch('https://arclight.iverique.com/api/v1/quiz' , {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+ access_token
            },
            })
            .then(data => data.json())
            .then(response => {
                console.warn("response: " + JSON.stringify(response));
                setQuestions(response.data);
                setLoading(false);
            });
    };

    const displayNextItem = () => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    };
    
    const handleAnswerSelection = (questionId, selectedOption) => {
        const newAnswer = { id: questionId, option: selectedOption };
        setAnswers([...answers, newAnswer]);
    };
    
    const submitAnswers = () => {
        console.log('Answers:', answers);
    };
    
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
        <View>
          {currentIndex < questions.length ? (
            <View>
              <Image source={{ uri: 'https://arclight.iverique.com'+ questions[currentIndex].image }} style={{ width: 100, height: 100 }} />
            {questions[currentIndex].choices.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => handleAnswerSelection(questions[currentIndex].id, option.description)}
                >
                  <Text>{option.description}</Text>
                </TouchableOpacity>
              ))}
            {/* Display other data fields as needed */}
            <Button title='next' onPress={displayNextItem}>
              Next
            </Button>
          </View>
        ) : (
          <Text>No more data to display.</Text>
        )}
          {/* {questions.map((question) => (
            <View key={question.id}>

              <Text ></Text>
              {question.choices.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => handleAnswerSelection(question.id, option.description)}
                >
                  <Text>{option.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
          <TouchableOpacity onPress={submitAnswers}>
            <Text>Submit Answers</Text>
          </TouchableOpacity> */}
        </View>
    );
};

export default Quiz;