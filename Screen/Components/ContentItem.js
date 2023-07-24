import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/QuizStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import AppStyles from '../../styles/shared-styles';

const ContentItem = ({question}) => {
  const windowDimensions = useWindowDimensions();
  const isPortrait = windowDimensions.height > windowDimensions.width;

    return (
    <ScrollView style={isPortrait && AppStyles.portraitStyles} contentContainerStyle={{
      flex: 1, alignItems: 'center', width: '100%',
      width: windowDimensions.width, alignItems: 'center'}}>
      <Text style={[styles.questionText]}>
            {question.description}
      </Text>
      <Image source={{uri: 'https://arclight.iverique.com'+ question.image}} style={styles.optionImage} resizeMode="contain" />
    </ScrollView>
    );
}

export default ContentItem;