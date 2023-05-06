import { useState } from "react";
import { TextInput,Button,Checkbox} from 'react-native-paper';
import React from "react";
import carrosRentado from  "./RentaCarros.js"
import { View,Text } from "react-native-web";
import style from "../css/style.js"


export default function ListaCarro(){

    <View style={style.container}>
        {carrosRentado.map(car => <Text>{car.placa}</Text>)}
        {carrosRentado.map(car => <Text>{car.Diponibles ? "El carro esta disponible": "El carro no esta disponible"}</Text>)}
    </View>
}