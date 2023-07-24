import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/QuizStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';

const QuizQuestionItem = ({question, selectedAnswer, onAnswerSelection}) => {
  const windowDimensions = useWindowDimensions();
  const isPortrait = windowDimensions.height > windowDimensions.width;
    return (
    <View style={styles.questionContainer}>
      <Text style={[styles.questionText]}>
            {question.description}
      </Text>
      <ScrollView contentContainerStyle={{width: windowDimensions.width, alignItems: 'center'}}>
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