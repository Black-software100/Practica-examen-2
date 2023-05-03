import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import RegistrarUsuario from './screens/RegistrarUsuario.js';
import styles from './css/style.js';
import { useState } from 'react';
import { TextInput,Button } from 'react-native-paper';
import {Usuarios} from './screens/RegistrarUsuario.js'
import Home from './screens/HomeScreen.js';
const Stack = createNativeStackNavigator();




function Login(){

  const navigation = useNavigation();
  const [username, setUsername] =useState('');
  const [password, setPassword] =useState('');
  const [error, setError] =useState('');

  let finder =  Usuarios.find(user => user.user == username && user.password == password);

  function handleLogin (){
    if(finder != undefined){
      navigation.navigate('Home');
    }else{
      setError('Usuario o contraseña incorrecta')
    }
  }

  function handleUsuario(){
    navigation.navigate('Usuario');
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
      <Button onPress={handleUsuario}>Registrar usuario</Button>
      <Button mode="contained" style={styles.button} onPress={handleLogin}>
        Ingresar
      </Button>
    </View>
  )
}






function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Usuario" component={RegistrarUsuario}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;
