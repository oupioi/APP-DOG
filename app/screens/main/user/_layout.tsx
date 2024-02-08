import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native'

export default function _layout() {
  return (
      <Stack>
        <Stack.Screen name='ProfileScreen' options={{
          headerTitle: 'Profile'
        }}></Stack.Screen>
      </Stack>
  )
}