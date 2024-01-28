import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserService } from '../../../services/UserService';
import { globalStyleSheet } from '../../../constants/GlobalStyleSheet';


export default function profile() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState<any>({});

  const userService = new UserService(); 
  /** @todo faire en sorte qu'il soit égal à true quand on modifie le formulaire */
  let hasChanged = true;
  const getUserData = async () => {
    try {
      const response = await userService.getPersonalInfos();
      const json = await response.json();
      if (response.status !== 200) {
        throw new Error(json.message);
      }
      setUserData(json);
      setIsLoaded(true)
    } catch (error) {}
  }

  useEffect(() => {
    getUserData()
  }, []);


  return (
    <SafeAreaView style={profileView.container}>
      {isLoaded ? (
        <View style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 20}}>
          <View style={globalStyleSheet.modalForm}>
            <View style={globalStyleSheet.inputContainer}>
              <Text style={globalStyleSheet.inputLabel}>Pseudo:</Text>
              <TextInput style={globalStyleSheet.inputForm} value={userData.pseudo}/>
            </View>
            <View style={globalStyleSheet.inputContainer}>
              <Text style={globalStyleSheet.inputLabel}>Firstname:</Text>
              <TextInput style={globalStyleSheet.inputForm} value={userData.firstName}/>
            </View>
            <View style={globalStyleSheet.inputContainer}>
              <Text style={globalStyleSheet.inputLabel}>Lastname:</Text>
              <TextInput style={globalStyleSheet.inputForm} value={userData.lastName}/>
            </View>

            <View style={globalStyleSheet.inputContainer}>
              <Text style={globalStyleSheet.inputLabel}>Email:</Text>
              <TextInput style={globalStyleSheet.inputForm} value={userData.email}/>
            </View>
            <View style={globalStyleSheet.inputContainer}>
              <Text style={globalStyleSheet.inputLabel}>Birthdate:</Text>
              <TextInput style={globalStyleSheet.inputForm} value={new Date(userData.birthdate).toLocaleDateString('en-EN')}/>
            </View>
            <View style={globalStyleSheet.inputContainer}>
              <Text style={globalStyleSheet.inputLabel}>Address:</Text>
              <TextInput style={globalStyleSheet.inputForm} value={userData.address.address}/>
            </View>
            <View style={globalStyleSheet.inputContainer}>
              <Text style={globalStyleSheet.inputLabel}>Zip code:</Text>
              <TextInput style={globalStyleSheet.inputForm} keyboardType='number-pad' value={userData.address.zipCode.toString()}/>
            </View>
            <View style={globalStyleSheet.inputContainer}>
              <Text style={globalStyleSheet.inputLabel}>City:</Text>
              <TextInput style={globalStyleSheet.inputForm} value={userData.address.city}/>
            </View>
            <View style={globalStyleSheet.inputContainer}>
              <Text style={globalStyleSheet.inputLabel}>Sex:</Text>
              <TextInput style={globalStyleSheet.inputForm} value={userData.sex.name}/>
            </View>
            <View style={globalStyleSheet.inputContainer}>
              <Text style={globalStyleSheet.inputLabel}>Notify friends:</Text>
              <TextInput style={globalStyleSheet.inputForm} value={'Hello'}/>
            </View>
          </View>
          { hasChanged ? (
            <Pressable style={globalStyleSheet.greenButton} onPress={() => {

            }}>
              <Text style={globalStyleSheet.greenButtonText}>Save</Text>
            </Pressable>
          ): null}
        </View>
      ): (
        <Text>Loading...</Text>
      )}
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