import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function Page() {
  const router = useRouter();
  return (
    <View>
      <Text>Page</Text>
      <Button title="Deconnexion" onPress={() => router.back()} />
    </View>
  )
}