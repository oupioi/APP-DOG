import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function _layout() {
  return (
      <Tabs screenOptions={{ 
          tabBarStyle: { backgroundColor: '#64748B' },
          tabBarActiveTintColor: '#6EE7B7',
        }}>
        <Tabs.Screen
          name='user'
          options={{
            tabBarLabel: "Mon compte",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person"
                size={24}
                color={focused ? "#6EE7B7" : "#ECFDF5"}
              />
            )
          }}
        />
        <Tabs.Screen
          name='first_page'
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={24}
                color={focused ? "#6EE7B7" : "#ECFDF5"}
              />
            )
          }}
        />
        <Tabs.Screen
          name='calendar'
          options={{
            tabBarLabel: "Calendrier",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="calendar"
                size={24}
                color={focused ? "#6EE7B7" : "#ECFDF5"}
              />
            )
          }}
        />
      </Tabs>
  )
}

// Suivre la documentation https://reactnavigation.org/docs/bottom-tab-navigator/#options
