import React, {useState}from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Input from '../components/form/Input';
import SearchInput from '../components/form/SearchInput'

const HomeScreen = ()=>{
  const [nome, setNome] = useState("");
  const [pesquisa, setPesquisa]=useState("");

  return(
    <>
      <View style={styles.viewStyle}>
        <SearchInput onChange={text=> setPesquisa(text)}initialValue={""}/>
      </View>
      <View style={styles.viewStyle}>
        
        <Input label="Nome Completo" 
        onChange={(text)=> setNome(text)} initialValue={"Digite"}/>
      </View>
    </>
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