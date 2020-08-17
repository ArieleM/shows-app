import React, {useContext} from 'react';
import {Text, FlatList, TouchableOpacity, StyleSheet, View}from 'react-native';
import {useShows} from '../../hooks/useShows';
import {AppContext} from '../../context/AppContext'

const ShowList = () =>{
  const {shows} = useShows();
  const {dispatch} = useContext(AppContext);

   return(
    <>
    <View style={styles.listStyle}>
      <FlatList
        data={shows.sort((show1, show2)=> (""+show1.name).localeCompare(show2.name))}
        keyExtractor={item=>item.id}
        renderItem={({item})=>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => dispatch({type: "setItemSelected", payload:item.id})}
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
    marginTop:40
  },
  textStyle:{
    fontSize:16,
    margin:5
  }
})
export default ShowList