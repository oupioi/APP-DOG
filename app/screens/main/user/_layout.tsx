import React from 'react'
import { Stack, router } from 'expo-router'
import TopButton from '../../../components/headers/topButton'

export default function _layout() {
  return (
      <Stack screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name='ProfileScreen' options={{
          headerTitle: 'Profile',
          // header: () => <DefaultHeader name='Profile'/>
          headerStyle: {
            backgroundColor: '#64748B',
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerTitleAlign: 'left',
          headerRight: () => <><TopButton icon='team' color='white' callBack={() => {router.push('/screens/main/LoginScreen')}}/></>
        }}></Stack.Screen> */}
      </Stack>
  )
}