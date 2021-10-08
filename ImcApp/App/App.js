import React,{useState} from"react";
import { SafeAreaView, StyleSheet, Text,} from 'react-native';
import Peso from './Componentes/Peso'
import Altura from './Componentes/Altura'
import BtnIMC from './Componentes/BotaoImc'
import Resultado from './Componentes/Resultado'
import Tabela from './Componentes/Tabela'

export default function(){
    
const [altura,setAltura]= useState()
const [peso,setPeso]= useState()
const [resultado,setResultado]= useState(0)

const calculo =()=>{
    if(peso==0 || peso==undefined){
    alert('Peso não pode ser "0"')
    return
    }
    if(altura==0 || peso == undefined){
    alert('Altura não pode ser "0"')
    return
    }
    const r=peso/(Math.pow(altura,2))
    console.log(peso,altura,r)
    setResultado(r.toFixed(1))
}

return(
    <SafeAreaView>
    <Text
        style={estilos.titulo}
    >Calculadora de IMC</Text>
    
    <Peso changing ={setPeso}/>
    <Altura changing={setAltura}/>
    <BtnIMC calc={calculo}/>
    <Resultado resultado={resultado}/>
    <Tabela/>

    
  
    
    </SafeAreaView> 
    )
}


const estilos = StyleSheet.create({

    titulo:{fontSize:30,
            fontFamily:'arial',
            textAlign:'center',
            color:'#06a',
            fontWeight:'bold',
            marginBottom:15,
            marginTop:10},
  
  })