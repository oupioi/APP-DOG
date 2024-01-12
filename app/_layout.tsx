import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    // Permet d'avoir l'entète du l'ecran 
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}/>
        <Stack.Screen name='register/index' options={{title:'Register'}}/>
        <Stack.Screen name='[missing]' options={{title:'404'}}/>
        <Stack.Screen name='login' options={{headerShown: false}}/>

        <Stack.Screen name='(nav)' options={{headerShown: false}}/>

    </Stack>
  )
}