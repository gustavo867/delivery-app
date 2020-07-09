import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { View, Text, Touchable, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, } from 'react-native';


const Vegetables = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1,}}>
      <LinearGradient
          colors={['rgba(255, 255, 255, 0.1)' , 'rgba(255, 255, 255, 0.4)']}
          style={{ position: 'absolute', height: '100%' , left: 0, right: 0, top: 0,}}
        />
      <TouchableOpacity onPress={handleNavigateBack} style={{  marginTop: 62, marginLeft: 21, }}>
        <Ionicons name="ios-arrow-back" size={28} color="#2D0C57"/>
      </TouchableOpacity>
      <Text style={styles.text}>Vegetables</Text>
      <TouchableOpacity style={{ marginLeft: 21, marginTop: 27, alignItems: 'center', flexDirection: 'row', width: '90%', backgroundColor: '#FFFFFF', borderRadius: 27, borderColor: '1 solid #D9D0E3' ,height: 47, }}>
        <Ionicons style={{ marginLeft: 25, }} name="ios-search" size={28} color="#2D0C57" />
        <TextInput placeholder="Search" style={{ marginLeft: 21, fontSize: 17, color: '#2D0C57', }}/>
      </TouchableOpacity>

        <View style={{ height: 200 }}>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity style={{ marginTop: 46, marginLeft: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#E2CBFF', width: 225, height: 34, borderRadius: 24,}}>
              <AntDesign name="check" size={24} color="#6C0EE4" />
              <Text style={{ lineHeight: 22, letterSpacing: -0.41, color: '#6C0EE4', fontSize: 14, fontWeight: '500', }}>Сabbage and lettuce (14)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Сucumbers and tomatoes (10)</Text>
            </TouchableOpacity>  
          </View>

          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity style={{ marginTop: 20,marginLeft: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF',width: 161, height: 34, borderRadius: 24, }}>
              <Text style={styles.textButton}>Oinons and garlic (8)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 20,marginLeft: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF',width: 103, height: 34, borderRadius: 24, }}>
              <Text style={styles.textButton}>Peppers (7)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 20,marginLeft: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF',width: 182, height: 34, borderRadius: 24, }}>
              <Text style={styles.textButton}>Potatoes and carrots (4)</Text>
            </TouchableOpacity>
          </View>
        </View>   
        
        <View style={{ justifyContent: 'flex-start', }}>
          <View style={{ flexDirection: 'row', marginLeft: 10, }}>
            <Image style={styles.image} source={require('../../images/lettuce.jpg')}/>
            <View>
              <Text style={{ marginLeft: 20, fontWeight: '600', lineHeight: 22, letterSpacing: -0.41, fontSize: 18, color: '#2D0C57' }}>Boston Lettuce</Text>
              <Text style={{ marginTop: 12, marginLeft: 20, fontWeight: '700', lineHeight: 22, letterSpacing: -0.41, fontSize: 22, color: '#2D0C57' }}>1.10 <Text style={{ fontSize: 16, color: '#9586A8', fontWeight: '500' }}>€ / piece</Text></Text>

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={handleToggleVisibility} style={styles.heartButton}>
                  <Ionicons name={isVisible ? 'md-heart-empty' : 'md-heart'} size={20} color={isVisible ? 'black' : '#890620'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.shopButton}>
                  <Feather name="shopping-cart" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>        
          </View>
        </View>
        
        
    </View>
  )
}

export default Vegetables

const styles = StyleSheet.create({
  text: {
    marginTop: 23,
    marginLeft: 21,
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    marginTop: 46, 
    marginLeft: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF',
    width: 225, 
    height: 34, 
    borderRadius: 24,
  },
  textButton: {
    color: 'rgba(149, 134, 168, 0.9)',
    fontSize: 14,
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  image: {
    width: 177,
    height: 128,
    borderRadius: 8,
  },
  heartButton: {
    marginTop: 30,
    marginLeft: 21,
    width: 70,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(204, 204, 204, 0.2)',
    justifyContent: 'center',
  },
  shopButton: {
    marginTop: 30,
    marginLeft: 21,
    width: 70,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#0BCE83',
    justifyContent: 'center',
  }
})