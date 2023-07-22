import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/QuizStyles';
import { ScrollView } from 'react-native-gesture-handler';

const ContentItem = ({question}) => {
    return (
    <View style={styles.questionContainer}>
      <Text style={[styles.questionText]}>
            {question.description}
      </Text>
      <Image source={{uri: 'https://arclight.iverique.com'+ question.image}} style={styles.optionImage} resizeMode="contain" />
    </View>
    );
}

export default ContentItem;