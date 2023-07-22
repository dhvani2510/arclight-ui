import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/QuizStyles';

const QuizQuestionItem = ({question, selectedAnswer, onAnswerSelection}) => {
    return (
    <View style={styles.questionContainer}>
      <Image source={{uri: 'https://arclight.iverique.com'+question.image}} style={styles.image} resizeMode="contain" />
      <View style={styles.options}>
        {question.choices.map((option, index) => (
          <TouchableOpacity
          key={index}
          style={[styles.option, selectedAnswer === option && styles.selectedOption]}
          onPress={() => onAnswerSelection(option)}
        >
          <Text style={[styles.optionText, selectedAnswer === option && styles.selectedOptionText]}>
            {option.description}
          </Text>
        </TouchableOpacity>
        ))}
      </View>
    </View>
    );
}

export default QuizQuestionItem;