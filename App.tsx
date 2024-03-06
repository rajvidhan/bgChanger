import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={"#000000"} />
   <View style={[styles.container]}>
   <TouchableOpacity>
   <View style={styles.action}>
      <Text style={styles.text}>Press ME</Text>
    </View>
   </TouchableOpacity>
   </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
   justifyContent:"center",

  },
  action:{
  borderRadius:12,
  backgroundColor:"#6A1B4D",
  paddingVertical:10,
  paddingHorizontal:40,
  },
  text:{
    fontSize:24,
    color:"#fff",
    textTransform:"uppercase"
  }
})