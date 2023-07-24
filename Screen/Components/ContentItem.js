import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/QuizStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import AppStyles from '../../styles/shared-styles';
import Tts from 'react-native-tts';
import { useEffect, useState } from 'react';

const ContentItem = ({question}) => {
  const windowDimensions = useWindowDimensions();
  const isPortrait = windowDimensions.height > windowDimensions.width;

  const [textToRead, setTextToRead]=useState('');

  // useEffect(() => {
  //   Tts.setDefaultLanguage('en-US'); // Set the default language for text-to-speech
  //   return () => {
  //     Tts.stop(); // Stop speaking when the component unmounts
  //   };
  // }, []);

  // const handleTextPress = () => {
  //   if (textToRead) {
  //     Tts.speak(textToRead); // Speak the text when the user touches it
  //   }
  // };

    return (
    <ScrollView style={isPortrait && AppStyles.portraitStyles} contentContainerStyle={{
      flex: 1, alignItems: 'center', width: '100%',
      width: windowDimensions.width, alignItems: 'center'}}>
      <TouchableOpacity>
      <Text style={[styles.questionText]}>
            {question.description}
      </Text>
      </TouchableOpacity>
      <Image source={{uri: 'https://arclight.iverique.com'+ question.image}} style={styles.optionImage} resizeMode="contain" />
    </ScrollView>
    );
}

export default ContentItem;