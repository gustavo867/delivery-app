import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import card from '../../images/card.png';
import ellipse from '../../images/Ellipse.png';
import mastercard1 from '../../images/mastercard_1.png';
import mastercard2 from '../../images/mastercard_2.png';
import camera from '../../images/camera.png';
import creditcard from '../../images/credit-card.png';

const Payment = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>

      <View style={{ marginTop: 52, marginLeft: 20, }}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Ionicons name="ios-arrow-back" size={24} color="#2D0C57"/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Credit / Debit card</Text>   
      </View>
      <Image style={{ marginLeft: 10, marginRight: 10, marginTop: 170, position: 'absolute', zIndex: -2, borderRadius: 8, }} source={card}/>
      <Image style={{ marginLeft: 150, marginTop: 170, position: 'absolute', zIndex: -1 }} source={ellipse}/>

      <View style={{ marginLeft: 290, marginTop: 200, position: 'absolute', zIndex: -1, backgroundColor: '#F24E1E', width: 40, height: 40, borderRadius: 20,}}></View>
      <View style={{ marginLeft: 310, marginTop: 200, position: 'absolute', zIndex: -2, backgroundColor: '#FFD25F', width: 40, height: 40, borderRadius: 20,}}></View>

      <Text style={styles.cardText} >4747  4747  4747  4747</Text> 
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <Text style={{ marginLeft: 27,  marginTop: 31, fontWeight: '600',color: '#FFFFFF',fontSize: 20,}}>Gustavo Santana</Text>
       <Text style={{  marginTop: 31, fontWeight: '600',color: '#FFFFFF',fontSize: 20, marginRight: 20,} }>07/21</Text>
      </View>

      <View style={{ marginTop: 44, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity>
          <Ionicons  name="ios-qr-scanner" size={40} color="black" />
          <Image style={{ position: 'absolute', zIndex: -1, marginTop: 10, marginLeft: 5, }} source={camera}/>
        </TouchableOpacity>    
      </View>

      <Text style={styles.cardInformation}>Name on card</Text>
      <TouchableOpacity style={styles.buttonInput}>
        <TextInput placeholder="Gustavo Santana" style={styles.input}/>
      </TouchableOpacity>
      
      <Text style={[styles.cardInformation, { marginTop: 10, }]}>Card number</Text>
      <TouchableOpacity style={styles.buttonInput}>
        <TextInput placeholder="4747  4747  4747  4747" style={styles.input}/>
        <View style={{ marginLeft: 300, marginTop: 0, position: 'absolute', zIndex: -1, backgroundColor: '#F24E1E', width: 25, height: 25, borderRadius: 13,}}></View>
        <View style={{ marginLeft: 313, marginTop: 0, position: 'absolute', zIndex: -2, backgroundColor: '#FFD25F', width: 25, height: 25, borderRadius: 13,}}></View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', }}>
        <View>
          <Text style={[styles.cardInformation, { marginTop: 10, }]}>Expiry Date</Text>
          <TouchableOpacity style={[styles.buttonInput, { width: 176 }]}>
            <TextInput placeholder="07/21" style={styles.input}/>
          </TouchableOpacity>
        </View>
     
        <View>
          <Text style={[styles.cardInformation, { marginTop: 10, }]}>CVC</Text>
          <TouchableOpacity style={[styles.buttonInput, { width: 176 , justifyContent: 'space-between', }]}>
            <TextInput placeholder="474" style={styles.input}/>
            <Image style={{ marginRight: 20, }} source={creditcard} />
          </TouchableOpacity>
        </View>        
      </View>

      <TouchableOpacity style={styles.shopButton}>
        <Text style={styles.paymentText}>Use this card</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    marginTop: 23,
    fontWeight: '700',
    fontSize: 30,
    color: '#2D0C57',
    letterSpacing: -0.41,
  },
  cardText: {
    marginLeft: 29, 
    marginTop: 140,
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 28,
  },
  cardInformation: {
    marginTop: 0,
    marginLeft: 24,
    fontSize: 14,
    letterSpacing: -0.41,
    color: '#9586A8',
    lineHeight: 22,
  },
  input: {
    marginLeft: 21, 
    fontSize: 17, 
    color: '#2D0C57', 
    fontWeight: '700', 
  },
  buttonInput: {
    marginLeft: 14, 
    marginTop: 8,
    alignItems: 'center', 
    flexDirection: 'row', 
    width: '90%', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 15, 
    borderColor: '#D9D0E3',
    height: 47,
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
    marginLeft: 20,
    flexDirection: 'row',
    marginTop: 35,
    width: 350,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#0ACF83',
    justifyContent: 'center',
  },
})