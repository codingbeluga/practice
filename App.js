import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
     <Image style={{flex:1,margin:0,padding:0,resizeMode:'cover', width: 500,height:800,position:'absolute',}}source={{ uri: 'https://img.onl/ti9Kxv' }}/>
      
      
      {/* <Image style={styles.center} source={require('./assets/IMG_4064.JPG')}/> */}
      <View style={[{backgroundColor: 'rgba(128,128,128,0.3)',margin: 10,padding: 10,borderRadius:30,position:'absolute'}]}>

        <Image style={[styles.center, { width:200,height: 200 },{borderRadius: 100,marginLeft:45,marginRight:30}]} source={{ uri: 'https://img.onl/v35YgE' }}/>
        <Text style={{color:'#fff',fontSize: 30,textAlign: 'center',}}>李品諺</Text>
        <Text style={{color:'#fff',fontSize: 10,textAlign: 'center',}}>---------------大家好v(￣︶￣)y---------------</Text>
        <Text style={{color:'#fff',fontSize: 20,textAlign: 'center',}}>系級-資工一A</Text>
        <Text style={{color:'#fff',fontSize: 20,textAlign: 'center',}}>興趣-游泳,找人打game,coding(?</Text>
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ff1',
    alignItems: 'center',
    justifyContent: 'center',
    margin:0,
    padding:0
  },
});
