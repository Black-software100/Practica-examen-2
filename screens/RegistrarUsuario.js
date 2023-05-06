import {View,Text} from 'react-native'
import React from "react";
import { useState } from "react";
import { TextInput,Button} from 'react-native-paper';
import style from "../css/style.js"

 export const Usuarios = []

export default function Usuario(){

    

    const [name, setName] = useState('')
    const [user,setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    function RegistroUsuario (){
      
      const namePatter = /^[A-Z\sa-z\s]+$/
      const passwordPatter = /^[A-Za-z0-9]+$/
      let validacionName = namePatter.test(name)
      let validacionPassword = passwordPatter.test(password)

      if(!validacionName){
        setError('solo  permite letras')
      }else if(!validacionPassword){
        setError('solo permite numeros y letras')
      }else{
        if(Usuarios.find(usuario => usuario.user == user) == undefined){
          let usuario = {
            name: name,
            user: user,
            password: password
          }
  
          Usuarios.push(usuario)
          setName("")
          setPassword("")
          setUser("")
          console.log(Usuarios)
          //navigation.navigate('Login');
        }else{
          setError('El usuario ya existe')
        }

      }
    }

    return(

      <View style={style.container}>
        <Text>Ingresar usuario</Text>
        <TextInput
          label = "Ingresar nombre completo"
          mode='outlined'
          onChangeText={name => setName(name)}
          value={name}
        />
        <TextInput
          label="Nombre de usuario"
          mode = "outlined"
          onChangeText={user => setUser(user)}
          value={user}
        />
        <TextInput
          label = "contraseña"
          mode = "outlined"
          onChangeText={password => setPassword(password)}
          value={password}
          secureTextEntry
        />
        {error ? <Text style={style.error}>{error}</Text>: null}
        <Button style={style.button} mode='contained' onPress={RegistroUsuario}>
          Registrar Usuario
        </Button>
      </View>
    )
}