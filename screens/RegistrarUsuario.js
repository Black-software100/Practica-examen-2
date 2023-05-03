import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CarrosDiponibles from './screens/CarrroDisponibles.js';
import RentaCarros from './screens/RentaCarros.js';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


function StackNavigator(){

    return(
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login}/> */}
        <Stack.Screen name="Home" component={Screen}/>
      </Stack.Navigator>
    )
  
}

function Home(){

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

export default Home