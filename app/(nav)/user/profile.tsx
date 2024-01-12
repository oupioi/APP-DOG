import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function profile() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState<any>({});

  const getUserData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/customer/1', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA1MDk3MDM2LCJleHAiOjE3MDU3MDE4MzZ9.XzDEMImNLyRnquwMVtYePQPvzqsXi23XOau4-Ziv2qM',
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json();
      if (response.status !== 200) {
        throw new Error(json.message);
      }
      setUserData(json);
      setIsLoaded(true)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserData()
  }, []);
  return (
    <SafeAreaView style={profileView.container}>
      <View>
      {isLoaded ? (
        <View>
          <Text>{userData.pseudo}</Text>
          <Text>{userData.email}</Text>
          <Text>{userData.firstName}</Text>
          <Text>{userData.lastName}</Text>
          <Text>{userData.birthdate}</Text>
          <Text>{userData.address.address}</Text>
          <Text>{userData.sex.name}</Text>
        </View>
      ): (
        <Text>Hello</Text>
      )}

      </View>
      
    </SafeAreaView>
  )
}

const profileView = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})