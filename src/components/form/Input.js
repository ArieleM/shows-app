import React, {useState} from 'react';
import{StyleSheet,TextInput, Text} from 'react-native';

const Input = (props)=>{
  const [valor, setValor] = useState(props.initialValue);
  const onChange = text =>{
    setValor(text);
    props.onChange(text);

  }
  return(
    <>
    <Text>{props.label}</Text>
    <TextInput style={styles.textInputStyle} 
    value={valor} onChangeText={onChange}/>
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