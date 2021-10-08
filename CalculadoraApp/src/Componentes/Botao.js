import React from "react";
import {StyleSheet, View, Text, TouchableHighlight, Dimensions, Touchable} from 'react-native'

export default props=>{
    
    const estilosBotoes=[estilos.btn]

    if(props.duplo){
        estilosBotoes.push(estilos.btnDuplo)
    }
    if(props.igual){
        estilosBotoes.push(estilos.btnIgual)
    }
    if(props.operacao){
        estilosBotoes.push(estilos.btnOper)
    }
    if(props.ac){
        estilosBotoes.push(estilos.btnAc)
    }
    if(props.bs){
        estilosBotoes.push(estilos.btnBack)
    }

    return(


        <TouchableHighlight
            onPress={props.func}
        >
            <Text style={estilosBotoes}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    btn:{
        fontSize:30,
        height:Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:'#000',
        color:'#fff',
        // borderWidth:1,
        // borderColor:'#777',
        textAlign:'center'
    },

    btnIgual:{
        color:'#f00',
    },

    btnOper:{
        color:'#0f0'
    },

    btnAc:{
        color:'#ff0'
    },

    btnBack:{
        color:'#0ff'
    },

    btnDuplo:{
        width:(Dimensions.get('window').width/4)*2,
    }
})