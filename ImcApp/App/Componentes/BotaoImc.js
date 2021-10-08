import React,{useState} from"react";
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet
  } from 'react-native';

export default props=>{

    return(
        <View
        style={estilos.btnBloco}
        >
            <TouchableHighlight
            style={estilos.btnTouch}
            onPress={()=>props.calc()}
            >
            <Text style={estilos.btnText}>IMC</Text>
            </TouchableHighlight>
        </View>
    )
}


const estilos = StyleSheet.create({
    btnBloco:{
        marginTop:20,
        marginLeft:50,
        marginRight:50},

    btnText:{
            textAlign:'center',
            color:'white',
            fontWeight:'bold',
            fontSize:30},

    btnTouch:{
            backgroundColor:'#06a',
            borderRadius:20},
  
  })