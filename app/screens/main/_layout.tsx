import React from 'react'
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AppLayout() {
    return (
        <Tabs screenOptions={{ 
                tabBarStyle: { backgroundColor: '#64748B' },
                tabBarActiveTintColor: '#6EE7B7',
                tabBarInactiveTintColor: '#ECFDF5',
                headerTitleAlign: 'left'
            }}>
            <Tabs.Screen name='user' options={{
                headerShown: false,
                tabBarLabel: "Profile",
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                    name="person"
                    size={24}
                    color={focused ? "#6EE7B7" : "#ECFDF5"}
                    />
                )
            }}/>
            
            <Tabs.Screen name='HomeScreen' options={{
                headerShown: false,
                tabBarLabel: "Home",
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="home"
                    size={24}
                    color={focused ? "#6EE7B7" : "#ECFDF5"}
                  />
                )
            }}/>
            <Tabs.Screen name='CalendarScreen' options={{
                headerTitle: 'Calendar',
                tabBarLabel: "Calendar",
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="calendar"
                    size={24}
                    color={focused ? "#6EE7B7" : "#ECFDF5"}
                  />
                )
            }}/>
            <Tabs.Screen name='[missing]' options={{href: null}}/>
        </Tabs>
    )
}