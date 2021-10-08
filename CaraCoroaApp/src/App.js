import React, { useState } from "react";
import { SafeAreaView, View, Text, Button, Image, StyleSheet} from 'react-native'

export default function(){
    const moedas=[
        require('./Imagens/moeda1.png'),
        require('./Imagens/moeda7.png'),
        require('./Imagens/moeda1.png'),
        require('./Imagens/moeda2.png'),
        require('./Imagens/moeda3.png'),
        require('./Imagens/moeda4.png'),
        require('./Imagens/moeda5.png'),
        require('./Imagens/moeda6.png'),
        require('./Imagens/moeda7.png'),
    ]

    let iMoeda = 0
    const maxGiros = 20

    const [moedaAtual,setMoedaAtual] = useState(moedas[iMoeda])

    async function espera(tmp){
        function tempo(ms){
            return new Promise(resolve=>setTimeout(resolve,ms))
        }
        await tempo(tmp)
    }

    async function girarMoeda(){
        iMoeda = 2
        for(let i=0;i<(maxGiros*8);i++){
            iMoeda++
            if(iMoeda > 8){
                iMoeda = 2
            }
            setMoedaAtual(moedas[iMoeda])
            await espera(10)
        }
        let res = Math.floor(Math.random()*10)+1;
        if(res<=5){
            res=0
        }else{
            res=1
        }
        setMoedaAtual(moedas[res])
    }

    return(
        <SafeAreaView style={estilos.conteiner}>
                <Text style={estilos.titulo}>Cara ou Coroa</Text>
                <Image source={moedaAtual}/>
                <Button
                    title='Girar'
                    onPress={()=>{girarMoeda()}}
                />
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    titulo:{
        width:'100%',
        textAlign:"center",
        fontSize:20,
        fontWeight:'bold'
    }
})