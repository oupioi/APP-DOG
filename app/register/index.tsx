import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View>
      <Text>On s'enregistre ici</Text>
      <Link href="/registration_confirmation" asChild> 
      <Button title='Confirmation'/>
    </Link>
    </View>
   
  )
}