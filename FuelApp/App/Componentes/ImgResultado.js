import React from 'react'
import { View, StyleSheet, Image} from 'react-native'

export default props=>{
    return(
        <View style={estilos.bloco}>
            {
                props.combustivel == '' ?
                <Image
                    source={require('../../assets/calc.png')}
                    style={estilos.bomba}
                />
                :
                props.combustivel == 'G' ?
                <Image
                    source={require('../../assets/fuel.png')}
                    style={estilos.bomba}
                />
                :
                <Image
                    source={require('../../assets/biofuel.png')}
                    style={estilos.bomba}
                />
            }
            
        </View>
    )
}

const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',

    },

    bomba:{
        width:220,
        height:220,
        resizeMode:'stretch'
    }
})
