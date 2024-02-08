import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Profile from './user/ProfileScreen';
import Calendar from './CalendarScreen';
import MapScreen from './MapScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TopButton from '../components/headers/topButton';
import { router } from 'expo-router';

const Tab = createBottomTabNavigator();
export default function index() {
  return (
    <Tab.Navigator screenOptions={{ 
      tabBarStyle: { backgroundColor: '#64748B' },
      tabBarActiveTintColor: '#6EE7B7',
    }}>
      <Tab.Screen name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? "#6EE7B7" : "#ECFDF5"}
            />
          ),
          // header: () => <DefaultHeader name='Profile'/>
          headerStyle: {
            backgroundColor: '#64748B',
            height: 120
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerTitleAlign: 'left',
          headerRight: () => <><TopButton icon='team' color='white' callBack={() => {router.push('/screens/LoginScreen')}}/></>
        }}
      />

      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Carte",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="map"
              size={24}
              color={focused ? "#6EE7B7" : "#ECFDF5"}
            />
          )
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
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
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});