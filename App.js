import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <Text>Bem Vindo ao meu App</Text>

    <TextInput
        style={styles.input}
        placeholder="Digite seu Email"
    />

    <TextInput
        style={styles.input}
        placeholder="Digite sua Senha"
    />

    <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Entrar</Text>
    </TouchableOpacity>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
      width: '90%',
      height: 40,
      justifyContent: 'center', 
      borderColor: 'gray', 
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      marginTop: 10
  },
  button: {
      width: '70%',
      height: 40,
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: '#000000', 
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      marginTop: 10
  }
});
