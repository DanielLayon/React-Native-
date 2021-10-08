import React,{useState} from"react";
import {
    View,
    Image,
    StyleSheet
  } from 'react-native';

export default props=>{

    return(
        <View style={estilos.imgBloco}>
            <Image
            source={require('../../assets/imc.jpg')}
            style={{width:'100%',resizeMode:'contain'}}
            />
        </View>
    )
}


const estilos = StyleSheet.create({
    
   
    imgBloco:{width:'100%',marginBottom:200}
    
  })