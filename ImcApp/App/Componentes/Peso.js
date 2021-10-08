import React,{useState} from"react";
import {
    TextInput,
    StyleSheet
  } from 'react-native';

export default props=>{
    return(
    <TextInput
        style={estilos.input}
        placeholder='Peso'
        keyboardType='number-pad'
        onChangeText={text=>props.changing(text)}
    />
    )
}


const estilos = StyleSheet.create({
  
    input:{ marginLeft:20,
            marginRight:20,
            borderBottomColor:'black',
            borderBottomWidth:1,
            marginBottom:10,
            paddingBottom:0},
  
  })