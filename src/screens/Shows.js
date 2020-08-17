import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ShowList from '../components/list/ShowList';
import ShowDetail from '../components/detail/ShowDetail'


const ShowScreen = ()=>{
  return(
    <>
      <View style={styles.parentStyle}>
        <View style={styles.listStyle}>
          <ShowList/>
        </View>
        <View style={styles.detailStyle}>
          <ShowDetail/>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  parentStyle:{
    marginTop:25,
    flex:1
  },
  listStyle:{
    flex:1
  },
  detailStyle:{
    flex:1
  }
})
export default ShowScreen;