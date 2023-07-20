import React from 'react';
import { Dimensions } from 'react-native';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';






const BasicLearning = () => {
    const categories = [
        {
          id: 1,
          name: "Numbers",
          // imageURL: require('../../Image/basiclearning.png')
        },
      
        {
          id: 2,
          name: "Shapes",
          // imageURL: require('../../Image/quiz.png')
        },
      
        {
          id: 3,
          name: "Animals",
          // imageURL: require('../../Image/ff.png')
        }
      ];
      
    const SCREEN_HEIGHT = Dimensions.get("screen").height;
    const SCREEN_WIDTH = Dimensions.get("screen").width;
    const render = ({item}) => {
    //const navigation = useNavigation();
  return (
    <TouchableOpacity
          style={styles.button}
          onPress={handleButtonPress(item.id)}
        >
          <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
  );
}
    const handleButtonPress = (buttonText) => {
        // Handle button press logic here
        console.log(`Button "${buttonText}" pressed`);
      }; 
  return (
    <View style={styles.container}>
     <View style={styles.imagecontainer}>
     <Image
        source={require('../../Image/basiclearning.png')} // Replace with the path to your logo image
        style={{height: SCREEN_HEIGHT/3, width: SCREEN_WIDTH-10}}
      />
    </View> 
    
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  imagecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
//   logo: {
//     width: 200,
//     height: 150,
//     marginBottom: 50,
//   },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',   
  },
  button: {
    backgroundColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BasicLearning;