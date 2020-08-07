import React from 'react';
import {Text, FlatList, TouchableOpacity, StyleSheet, View}from 'react-native';
import {useShows} from '../../hooks/useShows';

const ShowList = () =>{
  const {shows} = useShows();
   return(
    <>
    <View style={styles.listStyle}>
      <FlatList
        data={shows}
        keyExtractor={item=>item.id}
        renderItem={({item})=>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => console.log("Cliquei em "+item.id)}
        >
          <Text style={styles.textStyle}>{item.name}</Text>
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
  },
  textStyle:{
    fontSize:16,
    margin:5
  }
})
export default ShowList