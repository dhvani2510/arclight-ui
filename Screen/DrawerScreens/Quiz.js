import React, { useEffect, useState } from 'react';
import {View, ActivityIndicator, Button, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import QuizQuestionItem from '../Components/QuizQuestionItem';
import styles from '../../styles/QuizStyles';

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

    const handleNext = () => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex+1);
      }
    };
  
    const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex-1);
      }
    };

    const handleAnswerSelection = (questionId, answer) => {
      const existingAnswerIndex = answers.findIndex((item) => item.id === questionId);

      if (existingAnswerIndex !== -1) {
        setAnswers((prevAnswers) => {
          const updatedAnswers = [...prevAnswers];
          updatedAnswers[existingAnswerIndex] = { id: questionId, choiceId: answer.id };
          return updatedAnswers;
        });
      }
      else
        setAnswers((prevAnswers) => [...prevAnswers, { id: questionId, choiceId: answer.id }]);
    };

    const submitData = async(data) => {
      const access_token = await AsyncStorage.getItem('access-token');
      let dataToSend = {answers: data};
      return fetch('https://arclight.iverique.com/api/v1/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ access_token
        },
        body: dataToSend
      })
      .then(data => {
        return data.json();
      })
    };
    
    const submitAnswers = async() => {
        setLoading(true);
        let response = await submitData(answers);
    };

    const currentQuestion = questions[currentIndex];
    const totalQuestions = questions.length;
    const currentQuestionNumber = currentIndex + 1;
    const quizProgress = (currentQuestionNumber / totalQuestions) * 100;

    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.questionNumber}>{`Question ${currentQuestionNumber} of ${totalQuestions}`}</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${quizProgress}%` }]} />
          </View>        
        </View>
      <QuizQuestionItem question={currentQuestion}
        selectedAnswer={answers[currentQuestion.id]} 
        onAnswerSelection={(answer) => handleAnswerSelection(currentQuestion.id, answer)}
      />
       <View style={styles.buttons}>
        <Button style={{color: 'green'}} title="Previous" onPress={handlePrevious} disabled={currentIndex === 0} />
        {currentIndex === questions.length - 1 ? (
          <TouchableOpacity style={styles.submitButton} onPress={submitAnswers}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <Button style={{color: 'green'}} title="Next" onPress={handleNext} />
        )}
      </View>
      </View>
    );
};

export default Quiz;