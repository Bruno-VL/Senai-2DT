import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Logar = () => {
        alert(email + '-'+senha);
        console.log('Foi')
    }
 
    useEffect(() => {

    })

    return(
        <View style={styles.container}>
            <Text>Login</Text>

            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Digite seu Email"
            />

            <TextInput
                style={styles.input}
                onChangeText={text => setSenha(text)}
                value={senha}
                placeholder="Digite sua Senha"
            />

            <TouchableOpacity style={styles.button} onPress={Logar}>
                    <Text style={{color: 'white'}}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
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


export default Login; 