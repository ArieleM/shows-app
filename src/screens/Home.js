import React, {useState}from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Input from '../components/form/Input';
import SearchInput from '../components/form/SearchInput'

const HomeScreen = ()=>{
  const [nome, setNome] = useState("")
  return(
    <View style={styles.viewStyle}>
      <SearchInput label="Nome Completo" 
      onChange={(text)=> setNome(text)} initialValue={"Digite"}/>
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