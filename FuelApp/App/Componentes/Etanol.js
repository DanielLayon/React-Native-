import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'

export default props=>{
    return(
        <View style={estilos.bloco}>
            <Text style={estilos.text01}> Digite o preço da <Text style={estilos.text02}>Etanol</Text></Text>
            <TextInput
                style={estilos.input}
                placeholder='Etanol'
                onChangeText={text=>props.changeText(text)}
            />
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
    },

    text02:{
        color:'green'
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

