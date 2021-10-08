import React,{useState} from"react";
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';

export default props=>{

    return(
        <View>
            <Text
            style={estilos.resultado}
            >Resultado: 
                <Text style={estilos.resultadoValue}>{String(props.resultado)}</Text>
            </Text>
        </View>
    )
}


const estilos = StyleSheet.create({
    
    resultado:{
        fontSize:13,
        textAlign:'center',
        marginTop:20,
        fontSize:15},

    resultadoValue:{
            color:'red'
    },
    
  })