import React, {useContext} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {AppContext} from '../../context/AppContext'
const ShowDetail = () =>{
  const {state} = useContext(AppContext);
  const {name, country, network, image_thumbnail_path}=
  state.itemSelected?
  state.showList.find(item => item.id === state.itemSelected):
  {name:"",country:"",network:"", image_thumbnail_path:""};
  console.log(name)
  return(
    <>
    <View style= {style.parentStyle}>
      <View style= {style.viewStyle}>
        <Text>Nome: {name}</Text>
        <Text>Country: {country}</Text>
        <Text>Network: {network}</Text>
        <Image style={style.pictureStyle}
        resizeMode={"contain"}
        source={{uri:image_thumbnail_path}}
        />
      </View>
    </View>
  </>);
}
const style = StyleSheet.create({
  parentStyle:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  viewStyle:{
    alignSelf:"center",
    alignItems:"center"
  },
  pictureStyle:{
    width:300,
    height:200
  }
})
export default ShowDetail;