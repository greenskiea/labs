import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import BanhCanhScreen from './BanhCanhScreen';
import ChaoLuonScreen from './ChaoLuonScreen';
import PhoBoScreen from './PhoBoScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db', // Màu nền khung xanh dương
          },
          headerTitleStyle: {
            color: '#ffffff', // Màu chữ trắng
            fontSize: 24, // Kích thước chữ
            fontWeight: 'bold', // Độ đậm của chữ
          },
        }}
      >
        <Stack.Screen
          name="Menu"
          component={MainScreen}
          options={{ title: 'Menu' }}
        />
        <Stack.Screen
          name="BanhCanhScreen"
          component={BanhCanhScreen}
          options={{ title: 'Bánh Canh' }}
        />
        <Stack.Screen
          name="ChaoLuonScreen"
          component={ChaoLuonScreen}
          options={{ title: 'Cháo Lươn' }}
        />
        <Stack.Screen
          name="PhoBoScreen"
          component={PhoBoScreen}
          options={{ title: 'Phở Bò' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
