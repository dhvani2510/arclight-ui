import React from 'react';
import { Dimensions } from 'react-native';
import {View, Text, SafeAreaView, Image} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const categories = [
  {
    id: 1,
    name: "Basic Learning",
    imageURL: require('../../Image/basiclearning.png')
  },

  {
    id: 2,
    name: "Quiz",
    imageURL: require('../../Image/quiz.png')
  },

  {
    id: 3,
    name: "Fun Facts",
    imageURL: require('../../Image/ff.png')
  },

  {
    id: 4,
    name: "Scores",
    imageURL: require('../../Image/ss.png')
  }
];

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const render = ({item}) => {
    //const navigation = useNavigation();

  return (
    <TouchableOpacity onPress = {() => navigation.navigate('BasicLearning')} style= {{justifyContent: 'space-between', borderWidth: 1}}>
      <View style={{padding:16, width: 'auto'}}>
        <Image
          style={{width: 'auto', height: SCREEN_HEIGHT/3}}
          source={item.imageURL} />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 16}}>
        <FlatList
        contentContainerStyle={{justifyContent: 'space-between'}}
        style={{marginTop:16}}
        data={categories}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={render}
      />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;