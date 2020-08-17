import React, {useState, useContext} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Input from '../components/form/Input';
import {AppContext} from '../context/AppContext'


const NewShows = ()=>{
  const [name, setName] = useState("");
  const [network, setNetwork] = useState("");
  const [country, setCountry] = useState("");
  const [thumbNail, setThumbNail] = useState("");
  const {dispatch} = useContext(AppContext)

  const salvar =()=>{
    const action = {
      type:"addItem",
      payload:{
        name:name,
        network: network,
        country:country,
        image_thumbnail_path:thumbNail
      }
    };
    dispatch(action)
  }
  return(
    <>
      <View style={styles.viewStyle}>
        <Input label={"Nome:"} initialValue={""} onChange={text=> setName(text)}/>
        <Input label={"Network"} initialValue={""} onChange={text=>setNetwork(text)}/>
        <Input label={"Thumbnail"} initialValue={""} onChange={text=> setThumbNail(text)}/>
        <Input label={"Country"} initialValue={""} onChange={text=> setCountry(text)}/>
        <Button title={"Salvar"} onPress={()=>salvar()}></Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  viewStyle:{
    marginTop:30
  }
})
export default NewShows;

