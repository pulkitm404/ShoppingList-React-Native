import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import Header from "./components/Header";
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

import * as uuid from "uuid";

const App = () => {

  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk' },
    {id: uuid.v4(), text: 'Bread' },
    {id: uuid.v4(), text: 'Butter' },
    {id: uuid.v4(), text: 'Juice' },
  ]);

  const deleteItem =(id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }

  const addItem = (text) => {

    if (!text) {
      Alert.alert('Error', 'Please enter some text', [
        { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: true });
    } else {
      setItems(prevItems => {
        return [{id: uuid.v4(), text},...prevItems];
      });
       
    }
   
  }

  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} /> }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})

export default App;