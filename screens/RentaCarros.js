import React from "react";
import {Text, View, StyleSheet} from 'react-native'
import  {Carros}  from "./CarrroDisponibles";
import { TextInput,Button,Checkbox} from 'react-native-paper';
import { useState } from "react";
import { Usuarios } from "./RegistrarUsuario";
import style from "../css/style.js"

let carrosRentado = []


export default function RentaCarros(){

  const [placa, setPlaca] = useState('')
  const [user, setUser] = useState('')
  const [fecha, setFecha] = useState('')
  const [error, setError] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [mensaje, setMensaje] = useState('')

  function carroRentado (){
    debugger
    let carro = Carros.find(carro => carro.id === placa)
    let usuario = Usuarios.find(users => users.user === user)
    let validor_fecha = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(\d{4})$/
    
    if(validor_fecha.test(fecha)){
      if(carro != undefined  ){

        if(usuario != undefined){
          if(placa != "" && user  != "" &&  fecha != "") { 

            //if(carro.disponible == true){
              let autoIncrement = carroRentado.length +1

          
              let reservado 
              if(checked){
                reservado = false
              }else{
                reservado = true
              }


              const renta ={
                numeroRenta: autoIncrement,
                placa: placa,
                usuario: user,
                fecha:fecha,
                checked:checked
              }

              carrosRentado.push(renta)
              console.log(carrosRentado)
              //Carros.disponible = reservado
              limpiarDato()
              setMensaje("Renta ingresada correctamente")
            //}else{
              //setError("El carro no está disponible")
            //}
            
          }else{
            setError( "No dejar ninguen espacio en blanco")
          }
        }else{
          setError("El usuario no existe")
        }

      }else{
        setError("El carro no existe")
      }
    }

  
  }

  function limpiarDato(){
    setFecha("")
    setUser("")
    setPlaca("")
    setChecked(false)
  }

  function mostrarCarro (){
    debugger
    setError(null);
    setMensaje(null)
    if(placa !== ""){

      const carroEncontarado = carrosRentado.find(carro => carro.placa == placa)
      console.log(carroEncontarado)
      if(carroEncontarado){
        setUser(carroEncontarado.usuario)
        setFecha(carroEncontarado.fecha)
        setChecked(carroEncontarado.checked)
      }else{
        setError("No se encontro ningun carro")
      }
    }
  }

  return(
    <View style={style.container}>
      <Text>Renta de carro</Text>
      <TextInput
        label="Ingrese la placa del Carro"
        mode="outlined"
        onChangeText={placa => setPlaca(placa)}
        value={placa}
            />
      <TextInput
        label="Ingrese su nombre de usuario"
        mode="outlined"
        onChangeText={user => setUser(user)}
        value={user}
            />
      <TextInput
        label="Ingrese la fecha del alquler"
        mode="outlined"
        onChangeText={fecha => setFecha(fecha)}
        value={fecha}
            />
      <View style={style.check}>
        <Text>      
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {setChecked(!checked);}}
      /> Reservar carro</Text>
      </View>
      {error ? <Text style={style.error}>{error}</Text>:null}
      {mensaje ? <Text style={style.success}>{mensaje}</Text>:null}
      <Button style={style.button} mode="contained" onPress={carroRentado}>
        Guardar Renta
      </Button>
      <Button style={style.button} mode="contained" onPress={mostrarCarro}>
        Buscar Carro
      </Button>

      <Button style={style.button} mode="contained" onPress={limpiarDato}>
        Limpiar Datos
        </Button>
    </View>
  )
}
