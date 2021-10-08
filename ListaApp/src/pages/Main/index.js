import React,{ useReducer, useState } from 'react';
import {View, Image, Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {sha256} from 'react-native-sha256'
import Colors from '~/styles/colors';

import userMarketList from '../../hooks/userMarketList';

const Main = () => {
  

 

  const [product,setProduct] = useState('')
  const [state , addItem, checkItem, removeItem] = userMarketList()


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Adicionar produto'
          value={product}
          onChangeText={(text)=>{setProduct(text)}}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={async () => {
            addItem(product)
            setProduct('')
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={state}
          renderItem={({item})=>(
            <View style={styles.itemsContainer}>
              <TouchableOpacity
                style={styles.itemButtonCheck}
                onPress={()=>{
                  checkItem(item.id)
                }}
              >
                  <Text style={[styles.listItem,item.check ? styles.listItemChecked : '']}>{item.title}</Text>
              </TouchableOpacity>
            
                <TouchableOpacity 
                  onPress={()=>{
                   removeItem(item.id)
                  }}
                  style={styles.removeItem}>
                    <Text style={styles.removeItemText}>Remover</Text>
                </TouchableOpacity>
            </View>
            
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  inputContainer:{
    flexDirection:'row',
    margin:10
  },

  input:{
    flex:1,
    width:'80%',
    fontSize:30,
    color:Colors.black
  },

  addButton:{
    marginHorizontal:5,
    alignItems:'center',
    alignSelf:'center'
  },

  addButtonText:{
    color:Colors.red,
    fontSize:60
  },

  listItem:{
    marginVertical:3,
    marginHorizontal:7,
    fontSize:22,
    padding:10,
  },

  listItemChecked:{
    textDecorationLine:'line-through'
  },

  itemsContainer:{
    flexDirection:'row'
  },

  removeItem:{
    alignItems:'center',
    alignSelf:'center',
    marginHorizontal:10,
    
  },

  itemButtonCheck:{
    flex:1
  },

  removeItemText:{
    fontSize:12,
    color:Colors.red
  }
});

export default Main;
