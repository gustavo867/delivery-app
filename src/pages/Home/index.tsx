import React from 'react';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import background1 from '../../images/elipse-background-1.png';
import background2 from '../../images/elipse-background-2.png';

export default function Home() {
  const navigation = useNavigation();

  function handleNavigateCategories() {
    navigation.navigate('App')
  }

  return (
    <>
    <View style={styles.container}>
      <StatusBar style="light"/>
      <LinearGradient
          colors={['rgba(111, 18, 231, 0.6)', 'rgba(111, 18, 231, 0.7)']}
          style={{ position: 'absolute', height: 450 , left: 0, right: 0, top: 0,}}
        />
        <Image style={{ position: 'absolute', zIndex: -1,}} source={background1}/>
        <Image style={{ position: 'absolute', zIndex: -2, marginLeft: 200, }} source={background2}/>

    <View style={styles.lowContainer}>
      <View style={{ marginBottom: 20, backgroundColor: 'rgba(255, 255, 255, 0.9)', height: 104, width: 104, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Entypo name="box" size={34} color="black" />
      </View>
  
      <Text style={styles.Text}>Non-Contact</Text>
      <Text style={styles.Text}>Deliveries</Text>
      <Text style={styles.text}>When placing and order, select the option "Contactless delivery" and the courier will leave your order at the door.</Text>
      <TouchableOpacity onPress={handleNavigateCategories} style={styles.button}>
        <Text style={{ color: '#FFFF', fontWeight: '600', fontSize: 16, textTransform: 'uppercase', letterSpacing: -0.01, }}>Order Now</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 20, color: '#9586A8', fontWeight: '600', fontSize: 16, textTransform: 'uppercase', letterSpacing: -0.01, }}>Dismiss</Text>
    </View>
    </View>
  </>   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lowContainer: {
    flex: 1,
    marginTop: 312,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F5F5',
  },
  Text: {
    color: '#2D0C57',
    fontWeight: 'bold',
    fontSize: 34,
  },
  text: {
    fontWeight: '500',
    marginTop: 25,
    color: '#9586A8',
    fontSize: 17,
    textAlign: 'center',
  },
  button: {
    marginTop: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: '80%',
    backgroundColor: 'rgba(11, 206, 131, 0.6)',
  },
})