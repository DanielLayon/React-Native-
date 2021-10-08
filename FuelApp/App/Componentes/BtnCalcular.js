import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native'

export default props=>{
    return(
        <View style={estilos.bloco}>
            <TouchableHighlight
            onPress={props.calc}
            style={estilos.btn}
            >
                <Text style={estilos.txtBtn}>Calcular</Text>
            </TouchableHighlight>
        </View>
    )
}

const estilos = StyleSheet.create({
    bloco:{
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        marginBottom:10
    },

    btn:{
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7
    },

    txtBtn:{
        textTransform:'uppercase',
        color:'#fff',
        padding:15
    }
})

