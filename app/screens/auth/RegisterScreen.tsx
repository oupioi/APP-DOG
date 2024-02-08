import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View>
      <Text>On s'enregistre ici</Text>
      <Link href="/screens/auth/ConfirmationScreen" asChild> 
      <Button title='Confirmation'/>
    </Link>
    </View>
   
  )
}