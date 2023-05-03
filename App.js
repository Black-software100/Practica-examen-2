import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CarrosDiponibles from './screens/CarrroDisponibles.js';
import RentaCarros from './screens/RentaCarros.js';
import styles from './css/style.js';
import { useState } from 'react';
import { TextInput,Button } from 'react-native-paper';


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


let users = [
  {username:'juant',name: 'juan',password:12345,rol:"1"},
  {username:'estebani',name: 'esteban',password:'hola',rol:"2"},
  {username:'leonidas',name: 'drago',password:"delta",rol:"3"}
]

function Login(){

  const navigation = useNavigation();
  const [username, setUsername] =useState('');
  const [password, setPassword] =useState('');
  const [error, setError] =useState('');

  let finder =  users.find(user => user.username == username && user.password == password);

  function handleLogin (){
    if(finder != undefined){
      navigation.navigate('Home');
    }else{
      setError('Usuario o contraseña incorrecta')
    }
  } 

  return(
    <View style={styles.container}>
      <Text>Iniciar sesion</Text>
      <TextInput
        
        label="Nombre de usuario"
        mode='outlined'
        value={username}
        onChangeText={username => setUsername(username)}
      />
      <TextInput

      label="Contraseña"
      mode ="outlined"
      value={password}
      onChangeText={password => setPassword(password)}
      secureTextEntry/>
      {error ? <Text style={styles.error}>{error}</Text>:null}
      <Button mode="contained" style={styles.button} onPress={handleLogin}>
        Ingresar
      </Button>
    </View>
  )
}


function Screen(){
  return(
    <View>

    </View>
  )
}

function StackNavigator(){

  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Screen}/>
    </Stack.Navigator>
  )

}


function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>

        <BottomTab.Screen name="Usuario" component={StackNavigator} options={{headerShown:false}}/>

        <BottomTab.Screen name='Carros Disponible' component={CarrosDiponibles}/>

        <BottomTab.Screen name="Renta Carro" component={RentaCarros}/>

      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default App;
