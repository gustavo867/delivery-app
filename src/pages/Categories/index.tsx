import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from 'react-native';

const Categories = () => {
 
  const navigation = useNavigation();

  function handleNavigateVegetables() {
    navigation.navigate('Vegetables')
  }

  function handleNavigateHome() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['#F6F5F5' , 'rgba(255, 255, 255, 0.2)']}
          style={{ position: 'absolute', height: '100%' , left: 0, right: 0, top: 0,}}
        />
      <View style={{ marginTop: 62, marginLeft: 20, }}>
        <TouchableOpacity onPress={handleNavigateHome}>
          <Ionicons style={{ marginLeft: 5, }} name="ios-arrow-back" size={24} color="#2D0C57" />
        </TouchableOpacity>     
        <Text style={styles.Text}>Categories</Text>

        <TouchableOpacity style={{ marginTop: 27, alignItems: 'center', flexDirection: 'row', width: '90%', backgroundColor: '#FFFFFF', borderRadius: 27, borderColor: '1 solid #D9D0E3' ,height: 47, }}>
          <Ionicons style={{ marginLeft: 25, }} name="ios-search" size={28} color="#2D0C57" />
          <TextInput placeholder="Search" style={{ marginLeft: 21, fontSize: 17, color: '#2D0C57', }}/>
        </TouchableOpacity>
      </View>  

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity onPress={handleNavigateVegetables} style={{ borderRadius: 8, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20, marginTop: 42, backgroundColor: '#FFFF', }}>
            <Image source={require('../../images/vegetables.jpg')} style={{ height: 140, width: 160, borderTopRightRadius: 8, borderTopLeftRadius: 8,}}/>
            <Text style={styles.nameText}>Vegetables</Text>
            <Text style={{ marginLeft: 16, fontSize: 12, color: '#9586A8', marginBottom: 16, }}>(43)</Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={handleNavigateVegetables} style={{ borderRadius: 8, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20, marginTop: 42, backgroundColor: '#FFFF', }}>
            <Image source={require('../../images/orange.jpg')} style={{ height: 140, width: 160, borderTopRightRadius: 8, borderTopLeftRadius: 8,}}/>
            <Text style={styles.nameText}>Fruits</Text>
            <Text style={{ marginLeft: 16, fontSize: 12, color: '#9586A8', marginBottom: 16, }}>(32)</Text>
          </TouchableOpacity> 

        </View>

        <View style={{ flexDirection: 'row', }}>

            <TouchableOpacity onPress={handleNavigateVegetables} style={{ borderRadius: 8, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20, marginTop: 20, backgroundColor: '#FFFF', }}>
              <Image source={require('../../images/bread.jpg')} style={{ height: 140, width: 160, borderTopRightRadius: 8, borderTopLeftRadius: 8,}}/>
              <Text style={styles.nameText}>Bread</Text>
              <Text style={{ marginLeft: 16, fontSize: 12, color: '#9586A8', marginBottom: 16, }}>(22)</Text>
            </TouchableOpacity> 

            <TouchableOpacity onPress={handleNavigateVegetables} style={{ borderRadius: 8, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20, marginTop: 20, backgroundColor: '#FFFF', }}>
              <Image source={require('../../images/sweets.jpg')} style={{ height: 140, width: 160, borderTopRightRadius: 8, borderTopLeftRadius: 8,}}/>
              <Text style={styles.nameText}>Sweets</Text>
              <Text style={{ marginLeft: 16, fontSize: 12, color: '#9586A8', marginBottom: 16, }}>(56)</Text>
            </TouchableOpacity> 

        </View>

        <View style={{ flexDirection: 'row', }}>

            <TouchableOpacity  onPress={handleNavigateVegetables} style={{ borderRadius: 8, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20, marginTop: 20, backgroundColor: '#FFFF', }}>
              <Image source={require('../../images/pizza.jpg')} style={{ height: 140, width: 160, borderTopRightRadius: 8, borderTopLeftRadius: 8,}}/>
              <Text style={styles.nameText}>Pizza</Text>
              <Text style={{ marginLeft: 16, fontSize: 12, color: '#9586A8', marginBottom: 16, }}>(30)</Text>
            </TouchableOpacity> 

            <TouchableOpacity onPress={handleNavigateVegetables} style={{ borderRadius: 8, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20, marginTop: 20, backgroundColor: '#FFFF', }}>
              <Image source={require('../../images/coffe.jpg')} style={{ height: 140, width: 160, borderTopRightRadius: 8, borderTopLeftRadius: 8,}}/>
              <Text style={styles.nameText}>Coffe</Text>
              <Text style={{ marginLeft: 16, fontSize: 12, color: '#9586A8', marginBottom: 16, }}>(20)</Text>
            </TouchableOpacity> 

        </View>
      </ScrollView>
    </View>
  )
}
export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text: {
    marginLeft: 5,
    marginTop: 21,
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
    fontWeight: '700',
  },
  text: {
    fontSize: 30,
    color: '#0000'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  nameText: {
    color: '#2D0C57',
    fontSize: 18,
    marginLeft: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
})