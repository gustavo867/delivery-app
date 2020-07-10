import React, { useState } from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { CheckoutContainer } from './styles';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, StyleSheet, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Cart = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack()
  }

  function handleNavigateToPayment() {
   navigation.navigate('Payment')
  }

  return (
    <View style={{ flex: 1, }}>
      <StatusBar style="dark"/>
      <LinearGradient
          colors={['rgba(0, 0, 0, 0.01)', 'rgba(255, 255, 255, 0.9)' , 'rgba(255, 255, 255, 0.9)']}
          style={{ position: 'absolute', height: '100%' , left: 0, right: 0, top: 0,}}
        />
      <CheckoutContainer>
        <TouchableOpacity onPress={handleNavigateBack}>
         <Ionicons style={{ marginLeft: 21, marginTop: 50, }} name="ios-arrow-back" size={24} color="#2D0C57" />
        </TouchableOpacity>
        <Text style={{ marginTop: 50,  fontWeight: '600', fontSize: 17, color: '#2D0C57', marginLeft: 128, }}>Checkout</Text>
      </CheckoutContainer>

      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, }}>
          <Text style={styles.methods}>Payment Method</Text>
            <Text style={styles.textChange}>Change</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 32, marginLeft: 21,}}>
         <Image source={require('../../images/credit-card.png')}/>
         <Text style={styles.creditCardText}>**** **** **** 4747</Text>
        </View>
      </View>
      
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 52, }}>
          <Text style={styles.methods}>Delivery Address</Text>
            <Text style={styles.textChange}>Change</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 32, marginLeft: 21,}}>
         <Image source={require('../../images/house.png')}/>
         <View>
          <Text style={styles.creditCardText}>Gustavo Santana</Text>
          <Text style={styles.creditCardText}>Cesu 31 k-2 5.st, SIA Chili</Text>
          <Text style={styles.creditCardText}>Riga</Text>
          <Text style={styles.creditCardText}>LV-1012</Text>
          <Text style={styles.creditCardText}>Latvia</Text>
         </View>
        </View>

        <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, }}>
          <Text style={styles.methods}>Delivery Options</Text>
            <Text style={styles.textChange}>Change</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 32, marginLeft: 21,}}>
         <Image source={require('../../images/person.png')}/>
         <Text style={styles.creditCardText}>I’ll pick it up myself</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 32, marginLeft: 21,}}>
         <Image source={require('../../images/bike.png')}/>
         <Text style={styles.creditCardText}>By courier</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 32, marginLeft: 21,}}>
         <Image source={require('../../images/drone.png')}/>
         <Text style={styles.creditCardTextSelected}>By Drone</Text>
         <AntDesign style={{ marginLeft: 200, }} name="check" size={24} color="#6C0EE4" />
        </View>
      </View>

      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, }}>
          <Text style={styles.methods}>Non-Contact-Delivery</Text>
          <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#E2CBFF', width: 74, borderRadius: 36, alignItems: 'center', }}>
            <Text style={{ marginLeft: 14, color: '#6C0EE4', fontWeight: '600', fontSize: 14,}}>Yes</Text>
            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 13, width: 26, height: 26, marginLeft: 8, }}>
            </View>
          </TouchableOpacity>      
        </View>
      </View>
         <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={handleNavigateToPayment} style={styles.shopButton}>
              <AntDesign name="creditcard" size={20} color="#fff" />
              <Text style={styles.paymentText}>go to payment</Text>
            </TouchableOpacity>
        </View>
      </View>
     
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  textChange: { 
    color: '#7203FF', 
    marginRight: 15, 
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: -0.1,
    fontSize: 15,
  },
  methods: {
    marginLeft: 20,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.41,
    fontSize: 22,
    color: '#2D0C57',
  },
  creditCardText: {
    fontSize: 17,
    color: '#9586A8',
    letterSpacing: -0.41,
    marginLeft: 26,
    marginTop: 2,
  },
  creditCardTextSelected: {
    fontSize: 17,
    color: '#7203FF',
    letterSpacing: -0.41,
    marginLeft: 26,
    marginTop: 2,
  },
  paymentText: {
    letterSpacing: -0.01,
    marginLeft: 17,
    fontWeight: '600',
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#FFFFFF'
  },
  shopButton: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 21,
    width: 350,
    height: 56,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(108, 14, 228, 0.7)',
    justifyContent: 'center',
  },
})