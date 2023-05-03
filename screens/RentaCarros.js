import React from "react";
import {Text, View, StyleSheet} from 'react-native'
import  {Carros}  from "./CarrroDisponibles";
import { TextInput,Button,Checkbox} from 'react-native-paper';
import { useState } from "react";
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
    if(placa != "" && user  != "" &&  fecha != "" && checked == true) { 

      if(carro.disponible == true){
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
          fecha:fecha
        }

        carrosRentado.push(renta)

        Carros.disponible = reservado

        setMensaje("Renta ingresada correctamente")
      }else{
        setError("El carro no está disponible")
      }

    }else{
      setError( "No dejar ninguen espacio en blanco")
    }
  
  }

  function limpiarDato(){
    setFecha("")
    setUser("")
    setPlaca("")
  }

  function mostrarCarro (){
    setError(null);
    setMensaje(null)
    if(placa !== ""){

      const carroEncontarado = carrosRentado.find(carro => carro.placa == placa)
      const estado = Carros.find(carro => carro.id == placa) 
      if(carroEncontarado){
        setUser(carroEncontarado.usuario)
        setFecha(carroRentado.fecha)
        setChecked(estado.disponible)
      }else{
        setError("No se encontro ningun carro")
      }
    }
  }

  return(
    <View style={style.container}>
      <Text>Renta de carro</Text>
      <TextInput
        label="Ingrese Id del Carro"
        mode="outlined"
        onChangeText={placa => setPlaca(placa)}
        value={placa}
            />
      <TextInput
        label="Ingrese Id del Carro"
        mode="outlined"
        onChangeText={user => setUser(user)}
        value={user}
            />
      <TextInput
        label="Ingrese Id del Carro"
        mode="outlined"
        onChangeText={fecha => setFecha(fecha)}
        value={fecha}
            />
      <View style={style.check}>
        <Text>      
        <Checkbox
          status={checked ? true : false}
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
