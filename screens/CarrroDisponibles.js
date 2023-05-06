import React from "react";
import { View, Text } from "react-native-web";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";
import style from "../css/style.js"
import styles from "../css/style.js";

export  const Carros = []

export default function carrosDiponibles(){



    const [id, setId] = useState('')
    const [marca, setMarca] = useState('')
    const [error,setError] = useState('')
    const [mensaje,setMensaje] = useState('')
    const [disponible,setDisponible] = useState(true)

    function guardarCarro (){
        const placaPatter = /^[A-Z0-9]+$/
        const marcaPatter = /^[A-Za-z]+$/
        setError(null);
        setMensaje(null);

        if(id !="" && marca != ""){

            if(Carros.find(Carros => Carros.id == id) == undefined){
                let validacionPlaca = placaPatter.test(id)
                let validacionMarca = marcaPatter.test(marca)
                if(validacionPlaca && validacionMarca){

                    const carro = {
                        id: id,
                        marca: marca,
                        disponible: disponible
                    }
                    Carros.push(carro)
                    setMensaje("Carro guardado correctamente")
                    console.log(Carros)
                    setId('');
                    setMarca('');  
                }else{
                    setError("La placa o la marca esta mal digitadas")
                }

            }else{
                setError("El carro ya se encuentra registrado")
            }

        }else{
            setError("Ingrese por favor los campos para registrar el carro")
        }
    }


    function mostrarcarro (){
        setError(null);
        setMensaje(null)
        if(id !==""){

            const carroEncontrado = Carros.find(carro => carro.id == id)

            if(carroEncontrado){
                setMarca(carroEncontrado.marca)
                if(carroEncontrado.disponible){
                    setMensaje("El carro esta disponible")
                }else{
                    setError("El carro no esta Disponible")
                }
            }else{
                setError("No se encontror el carro")
            }
        }else{
            setError("Ingrese un id para buscar el carro")
        }
    }


    function limpiarCampo (){
        setId('');
        setMarca('');   
        setError(null);
        setMensaje(null)
    }

    return(
        <View style={style.container}>
            <Text>Agregar Carro</Text>
            <TextInput
                label="Ingrese placa del Carro"
                mode="outlined"
                onChangeText={id => setId(id)}
                value={id}
            />
            <TextInput
                label="Ingrese marca del carro"
                mode = "outlined"
                onChangeText={marca => setMarca(marca)}
                value={marca}
            />
            {error ? <Text style={styles.error}>{error}</Text>:null}
            {mensaje ? <Text style={styles.success}>{mensaje}</Text>:null}
            <Button style={style.button} mode="contained" onPress={guardarCarro}>
                Agregar Carro
            </Button>
            <Button style={style.button} mode="contained" onPress={mostrarcarro}>
                Mostrar Carro
            </Button>
            <Button style={style.button} mode="contained" onPress={limpiarCampo}>
                Limpiar Datos
            </Button>
        </View>
    )

}