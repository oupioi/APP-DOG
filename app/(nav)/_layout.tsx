import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name='user' options={{tabBarLabel: "User", headerShown: false}}/>
      <Tabs.Screen name='first_page' options={{tabBarLabel: "Acceuil"}}/>
      <Tabs.Screen name='calendar'options={{tabBarLabel: "Calendrier"}}/> 
    </Tabs>
  )
}