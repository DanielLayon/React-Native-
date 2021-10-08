import React, { useState } from 'react'
import {Alert, SafeAreaView, StyleSheet} from 'react-native'
import Gasolina from './Componentes/Gasolina'
import Etanol from './Componentes/Etanol'
import BtnCalcular from './Componentes/BtnCalcular'
import Resultado from './Componentes/Resultado'
import ImgResultado from './Componentes/ImgResultado'

App=()=>{
    const [gasolina,setGasolina] = useState('')
    const [etanol,setEtanol] = useState('')
    const [resultado,setResultado] = useState('')

    const calcular = () =>{
        if(!gasolina){
            Alert.alert('Error','Informe o preço da gasolina!!!')
            return
        }else if(!etanol){
            Alert.alert('Error','Informe o preço do etanol!!!')
            return
        }
        let res
        let calc=((etanol/gasolina)*100).toFixed(1)

        if(calc>70){
            res='Gasolina'
        }else{
            res='Etanol'
        }
        alert('O etanol está custando '+calc+'% da Gasolina. Portanto é melhor abastecer com '+res)
        setResultado(res)
    }

    return(
        <SafeAreaView>
            <Gasolina changeText={setGasolina}/>
            <Etanol changeText={setEtanol}/>
            <BtnCalcular calc={calcular}/>
            <Resultado resultado={resultado}/>
            <ImgResultado combustivel={resultado.charAt(0)}/>
    
        </SafeAreaView>
    )
}

export default App
