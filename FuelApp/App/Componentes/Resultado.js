import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'

export default props=>{
    return(



        <View style={estilos.bloco}>
            <Text style={estilos.text01}>Melhor combustível: <Text style={estilos.text02}>{props.resultado}</Text></Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10
    },

    text01:{
        marginLeft:20,
        fontSize:14,
        fontWeight:'bold'
    },

    text02:{
        color:'black'
    },

    input:{
        paddingBottom:0,
        marginLeft:20,
        marginRight:20,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'black'
    }
})

