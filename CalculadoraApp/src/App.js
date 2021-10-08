import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    SafeAreaView,
    Button} from 'react-native'
import Display from './Componentes/Display'
import Btn from './Componentes/Botao'

let estados = {
    valorTela:'',
    resultado:0,
    operado:false,
    ponto:false,
}


export default function App(){

    const [vtela,setVtela] = useState(estados.valorTela)
    const [vres,setVres] = useState(estados.resultado)

    const addDigito=(digito)=>{
        if(digito=='.'&& !estados.ponto){
            estados.ponto=true
            estados.operado=false
        }
        else if(digito=='.'&& estados.ponto){
            return
        }

        if(digito=='+' || digito=='-' ||digito=='*' ||digito=='/'){
            estados.ponto=false
        }

        if((digito=='+' || digito=='-' ||digito=='*' ||digito=='/')&& estados.operado){
            estados.valorTela=estados.resultado
            estados.resultado=0
        }

        estados.valorTela=estados.valorTela+digito
        setVtela(estados.valorTela)
        setVres(estados.resultado)
        estados.operado=false
        
    }

    const limparTela=()=>{
        estados = {
            valorTela:'',
            resultado:0,
            operado:false,
            ponto:false,
        }

        setVtela(estados.valorTela)
        setVres(estados.resultado)
    }

    const opera=(value)=>{
        if(value=='AC'){
            limparTela()
            return
        }
        if(value=='BS'){
            estados.valorTela=vtela.substring(0,vtela.length-1)
            setVtela(estados.valorTela)
            return
        }
        try{
            estados.resultado=eval(estados.valorTela)
            estados.operado=true
            setVres(estados.resultado)
        }catch(err){
            estados.resultado='Erro'
            estados.operado=true
            setVres(estados.resultado)
        }
        
    }

    return(
        <SafeAreaView style={estilos.container}>
            <Text>Calculadora</Text>
            <Display valor={vtela} res={vres}/>
            <View style={estilos.containerBtn}>
                <Btn label='AC' ac func={()=>{opera('AC')}}/>
                <Btn label='(' func={()=>{addDigito('(')}}/>
                <Btn label=')' func={()=>{addDigito(')')}}/>
                <Btn label='/' operacao func={()=>{addDigito('/')}}/>
                <Btn label='7' func={()=>{addDigito('7')}}/>
                <Btn label='8' func={()=>{addDigito('8')}}/>
                <Btn label='9' func={()=>{addDigito('9')}}/>
                <Btn label='*' operacao func={()=>{addDigito('*')}}/>
                <Btn label='4' func={()=>{addDigito('4')}}/>
                <Btn label='5' func={()=>{addDigito('5')}}/>
                <Btn label='6' func={()=>{addDigito('6')}}/>
                <Btn label='-' operacao func={()=>{addDigito('-')}}/>
                <Btn label='1' func={()=>{addDigito('1')}}/>
                <Btn label='2' func={()=>{addDigito('2')}}/>
                <Btn label='3' func={()=>{addDigito('3')}}/>
                <Btn label='+' operacao func={()=>{addDigito('+')}}/>
                <Btn label='.' func={()=>{addDigito('.')}}/>
                <Btn label='0' func={()=>{addDigito('0')}}/>
                <Btn label='<-' bs func={()=>{ opera('BS')}}/>
                <Btn label='=' igual func={()=>{opera('=')}}/>
            </View>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },

    containerBtn:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
   
})