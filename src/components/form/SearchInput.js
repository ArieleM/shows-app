import React, {useState} from 'react';
import{StyleSheet,TextInput, Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import GenericInput from './GenericInput'


const SearchInput = (props)=>{
  const onChange = text =>{
    setValor(text);
    if(props.onChange)
      props.onChange(text);

  }
  return(
    <>
    <View style={styles.viewStyle}>
    <AntDesign style={styles.iconStyle} name="search1" size={20} color="black" />
    <GenericInput initialValue={props.initialValue} style={styles.inputStyle} 
    onChange={onChange}/>
    </View>
    </>
  )
}

export default SearchInput;

const styles = StyleSheet.create({
  viewStyle:{
    flexDirection:"row",
    backgroundColor:"white",
    borderRadius:50
  },
  inputStyle:{
    marginLeft:5,
    width:200
  },
  iconStyle:{
    alignSelf:"center"
  }
})