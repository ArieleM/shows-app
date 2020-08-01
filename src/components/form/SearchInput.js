import React, {useState} from 'react';
import{StyleSheet,TextInput, Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const SearchInput = (props)=>{
  const [valor, setValor] = useState(props.initialValue);
  const onChange = text =>{
    setValor(text);
    props.onChange(text);

  }
  return(
    <>
    <View style={styles.viewStyle}>
    <AntDesign name="search1" size={20} color="black" />
    <Text style={styles.textStyle}>{props.label}</Text>
    <TextInput style={styles.textInputStyle} 
    value={valor} onChangeText={onChange}/>
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
  textInputStyle:{
    marginLeft:5,
    width:200
  },
  textStyle:{
    alignSelf:"center"
  }
})