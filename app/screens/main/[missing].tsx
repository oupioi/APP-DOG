import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { router } from 'expo-router';



export default function Page() {
  return (
    <View>
      <Text style={{fontSize: 20, color:'red'}}>Pourquoi tu es ici ?😱 </Text>
      <Button title="Revenir" onPress={() => router.back()} />
    </View>
  )
}