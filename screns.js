

export default function screenshot(){
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