import React, {useState}from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Input from '../components/form/Input'

const HomeScreen = ()=>{
  const [nome, setNome] = useState("")
  return(
    <View style={styles.viewStyle}>
      <Input label="Nome Completo" 
      onChange={(text)=> setNome(text)} initialValue={"Ariele"}/>
    </View>
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
  viewStyle:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})