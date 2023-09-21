import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {LandingScreen} from './sj/LandingScreen';
import {LoginScreen} from './sj/LoginScreen';
import { SignUpScreen } from './sj/SignUpScreen';


const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name ='Home' component={LandingScreen} />
        <Stack.Screen name='LoginAbc' component={LoginScreen} options={{headerShown:true}} />
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:true}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
