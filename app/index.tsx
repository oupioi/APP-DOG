import { View, Text , Button} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View style={{flex :1,justifyContent:'center',alignItems:'center'}}>
      <Text>DogApp</Text>
    <Link href="/register" asChild> 
    {/* asChild permet d'avoir le bouton lié à la propriété Link  */}
        <Button title='Viens ici pour l inscription'/>
    </Link>
    <Link href="/login" asChild>
        <Button title='Viens ici pour te connecter'/>
    </Link>
    </View>
  )
}