import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = () => {
  return (
    <View style={styles.container}>
        <LinearGradient
          colors={['#F6F5F5' , 'rgba(255, 255, 255, 0.2)']}
          style={{ position: 'absolute', height: '100%' , left: 0, right: 0, top: 0,}}
        />
      <Text>Hello</Text>
    </View>
  )
}
export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})