import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Login() {
  return (
    <View>
      <Text>La page de login</Text>
      <Link href="/first_page" asChild>
        <Button title='Accueil'/>
      </Link>
    </View>
  )
}