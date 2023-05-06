import CarrosDiponibles from './CarrroDisponibles';
import RentaCarros from './RentaCarros.js';
import Lista from './Lista.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text} from 'react-native'
//import styles from '../css/style.js';
const BottomTab = createBottomTabNavigator();


 function Home(){

    return(
            <BottomTab.Navigator>
                <BottomTab.Screen name ="registrar carro" component={CarrosDiponibles}/>
                <BottomTab.Screen name= "rentar carro" component={RentaCarros}/>
                <BottomTab.Screen name= "rentar carro" component={Lista}/>
            </BottomTab.Navigator>
    )

 }

 export default Home;