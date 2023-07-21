import React, { useEffect, useState } from 'react';
import {View, ActivityIndicator, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import QuizQuestionItem from '../Components/QuizQuestionItem';

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
                setQuestions(response.data);
                setLoading(false);
            });
    };

    
    function callBackAnswers(data)  {
      console.warn("data: " + JSON.stringify(data));
      setAnswers((prevAnswers) => [...prevAnswers,data]);
      console.warn("updatedData: " + JSON.stringify(answers));

    }

    const handleNext = () => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }

    };
  
    const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
    
    const submitAnswers = () => {
        console.warn('Answers:', answers);
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
           <QuizQuestionItem items={questions} answers={answers} 
            currentIndex={currentIndex}
            handleAnswerSlectAction={callBackAnswers}/>
          <View style={{display:'flex', gap:10}}>
            <Button title='Previous' onPress={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </Button>
            <Button title="Next" onPress={handleNext} disabled={currentIndex === questions.length - 1}>
              Next
            </Button> 
          </View>
          <Button title="Submit" onPress={submitAnswers} style={{display: (currentIndex == questions.length-1) ? 'flex' : 'none' }} disabled={currentIndex != questions.length - 1}>
              Submit
          </Button> 
        </View>
    );
};

export default Quiz;