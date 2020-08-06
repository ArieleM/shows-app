import React from 'react';
import {Text, FlatList, TouchableOpacity, StyleSheet, View}from 'react-native';

const shows = {
  items:[
    {
      id:1,
      nome:"Friends"
    },
    {
      id:2,
      nome:"Heroes"
    },
    {
      id:3,
      nome:"Two and a half man "
    }
  ]
}

const ShowList = () =>{
  return(
    <>
    <View style={styles.listStyle}>
      <FlatList
        data={shows.items}
        renderItem={({item})=>
        <TouchableOpacity style={styles.buttonStyle}
        onPress={() => console.log("Cliquei em "+item.id)}
        >
          <Text>{item.nome}</Text>
        </TouchableOpacity>
      }/>
    </View>
  </>
  );
}
const styles = StyleSheet.create({
  buttonStyle:{
    flexDirection:"row",
    justifyContent: "center",
    borderColor:"gray",
    borderTopWidth:1,
    backgroundColor:"#DCDCDC"
  },
  listStyle:{
    marginTop:50
  }
})
export default ShowList