import React from 'react'
import { Stack, Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name='profile' options={{headerShown: false}}/>
    </Stack>
  )
}