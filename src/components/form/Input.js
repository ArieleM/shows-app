import React, {useState} from 'react';
import{StyleSheet,TextInput, Text} from 'react-native';
import GenericInput from './GenericInput'

const Input = (props)=>{
  
  const onChange = text =>{
    if(props.onChange)
      props.onChange(text);

  }
  return(
    <>
    <Text>{props.label}</Text>
    <GenericInput initialValue={props.initialValue} style={styles.textInputStyle} 
    onChange={onChange}/>
    </>
  )
}

export default Input;

const styles = StyleSheet.create({
  textInputStyle:{
    backgroundColor:"white",
    width:200
  }
})