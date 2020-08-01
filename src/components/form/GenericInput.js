import React, {useState} from 'react';
import{TextInput} from 'react-native';


const GenericInput = (props)=>{
  const [valor, setValor] = useState(props.initialValue);
  const onChange = text =>{
    setValor(text);
    if(onChange)
      props.onChange(text);

  }
  return(
    <TextInput value={valor} style={props.style} onChange={onChange}/>
  )
}

export default GenericInput;