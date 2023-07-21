import { useState } from 'react';
import { Image } from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const QuizQuestionItem = (props) => {
  const {items, answers, currentIndex, handleAnswerSlectAction } = props;

  const [answerList, setAnswerList] = useState(answers);
  
  const handleAnswerSelection = (id, selectedOption) => {
      const newAnswer = { id: id, option: selectedOption };
      setAnswerList([...answerList, newAnswer]);
      console.warn("answerList: " + JSON.stringify(answerList));
      handleAnswerSlectAction(answerList);

  };
    return (
        <View>
        <Image source={{ uri: 'https://arclight.iverique.com'+ items[currentIndex].image }} style={{ width: 100, height: 100 }} />
      {items[currentIndex].choices.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => handleAnswerSelection(items[currentIndex].id, option.description)}
          >
            <Text>{option.description}</Text>
          </TouchableOpacity>
        ))}
    </View>
    );
}

export default QuizQuestionItem;