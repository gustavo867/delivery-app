import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const VegetableCart = () => {
 const navigation = useNavigation()
  const [ heartTouched, setHeartTouched ] = useState(true)
  
  function handleHeartTouched() {
    setHeartTouched((prevState) => !prevState);
  }

  function handleNavigateToCart() {
    navigation.navigate('Cart')
  }

  return (
    <View style={{ flex: 1, }}>
      <StatusBar style="light" />
      <Image style={styles.image} source={require('../../images/lettuce.jpg')}/>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.treeButtons}>  
        </View>
        <View style={{ 
          marginTop: 330, 
          marginLeft: 10, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',  
          borderRadius: 4, 
          width: 8, 
          height: 8,
          }}>    
        </View>
        <View style={{ 
          marginTop: 330, 
          marginLeft: 10, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',  
          borderRadius: 4, 
          width: 8, 
          height: 8,
          }}>            
        </View>
      </View>
      
      <View style={{ marginTop: 10, backgroundColor: '#F6F5F5', flex: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30, }}>
        <Text style={{ marginTop: 37, marginLeft: 20, fontSize: 30, fontWeight: '700', lineHeight: 41, letterSpacing: 0.41, color: '#2D0C57' }}>Boston Lettuce</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{
            textAlign: 'center',
            marginLeft: 20,
            fontWeight: '700',
            fontSize: 32,
            lineHeight: 43,
            letterSpacing:-0.802917,
            color: '#2D0C57',
          }}>1.10 </Text>
          <Text style={{ fontWeight: '500', fontSize: 24, lineHeight: 48, }}> € / piece</Text>
        </View>
        <Text style={{ marginLeft: 20, marginTop: 8, fontSize: 17, fontWeight: '500', letterSpacing: -0.41, color: '#06BE77' }}>~ 150 gr / piece</Text>
        <Text style={{ marginTop: 32, marginLeft: 20, fontSize: 22, color: '#2D0C57', fontWeight: '700', lineHeight: 22, letterSpacing: -0.41 }}>Spain</Text>
        <Text style={{
          marginLeft: 20,
          marginTop: 16,
          fontSize: 16,
          color: '#9586A8',
          letterSpacing: -0.41,
          fontWeight: '600',
          lineHeight: 20,
        }}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
        
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity onPress={handleHeartTouched} style={styles.heartButton}>
            <Ionicons name={heartTouched ? 'md-heart-empty' : 'md-heart'} size={20} color={heartTouched ? 'black' : '#890620'}  />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigateToCart} style={styles.shopButton}>
            <Feather name="shopping-cart" size={20} color="#fff" />
            <Text style={styles.cartText}>add to cart</Text>
          </TouchableOpacity>
        </View>
         
      </View>
    </View>
  )
}

export default VegetableCart

const styles = StyleSheet.create({
  image: {
    width: 414,
    height: 380,
    position: 'absolute',
  },
  treeButtons: {
    marginTop: 330,
    marginLeft: 179,
    width: 8,
    height: 8,
    backgroundColor: '#FFF',
    borderRadius: 4,
  },
  heartButton: {
    marginTop: 40,
    marginLeft: 20,
    width: 78,
    height: 56,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(204, 204, 204, 0.2)',
    justifyContent: 'center',
  },
  shopButton: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 21,
    width: 265,
    height: 56,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#0BCE83',
    justifyContent: 'center',
  },
  cartText: {
    lineHeight: 20,
    letterSpacing: -0.01,
    marginLeft: 17,
    fontWeight: '600',
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#FFFFFF'
  },
  
})