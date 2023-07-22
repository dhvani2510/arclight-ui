import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/QuizStyles';
import { ScrollView } from 'react-native-gesture-handler';

const QuizQuestionItem = ({question, selectedAnswer, onAnswerSelection}) => {
    return (
    <View style={styles.questionContainer}>
      <Text style={[styles.questionText]}>
            {question.description}
      </Text>
      <ScrollView style={styles.options}>
        {question.choices.map((option, index) => (
          <TouchableOpacity
          key={index}
          style={[styles.option, selectedAnswer === option && styles.selectedOption]}
          onPress={() => onAnswerSelection(option)}
        >
        <Image source={{uri: 'https://arclight.iverique.com'+ option.image}} style={styles.optionImage} resizeMode="contain" />

        </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    );
}

export default QuizQuestionItem;