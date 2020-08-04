import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const HomeScreen = ()=>{
  return(
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Séries Ltd</Text>
      </View>
    </>
  )
}

const styles= StyleSheet.create({
  viewStyle:{
    flex:1 ,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:"#990193",
  },
  textStyle:{
    color:"white",
    fontSize:30
  }
})
export default HomeScreen;


