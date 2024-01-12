import { View, Text , Button, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { globalStyleSheet } from '../constants/GlobalStyleSheet';

export default function index() {
  return (
    <View style={indexStyle.view}>
      <Text style={indexStyle.blankDiv}>DogApp</Text>
    <Link href="/register" asChild> 
      <Pressable style={globalStyleSheet.greenButton}>
        <Text style={globalStyleSheet.greenButtonText}>Register</Text>
      </Pressable>
    </Link>
    <Link href="/login" asChild>
        <Pressable style={globalStyleSheet.greenButton}>
          <Text style={globalStyleSheet.greenButtonText}>Login</Text>
        </Pressable>
    </Link>
    </View>
  )
}

const indexStyle: any = StyleSheet.create({
  view: {
    flex :1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'column',
    gap: 10
  }
});