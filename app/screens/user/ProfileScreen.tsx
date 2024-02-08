import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserService } from '../../services/UserService';
import { PersonalInfosResponse } from '../../interfaces/ResponseBodies/PersonalInfosResponse';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileModal from '../../components/user/profileModal';
import UserPresentation from '../../components/user/userPresentation';
import TopButton from '../../components/headers/topButton';

/** @todo Changer le formulaire */
export default function Profile() {

  const [user, setUser] = useState<PersonalInfosResponse|null>(null);
  const test = () => {
    console.log('test');
  }

  const userService = new UserService(); 
  const getUserData = async () => {
    try {
      const data = await userService.getPersonalInfos();
      setUser(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData()
  }, []);


  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <SafeAreaView style={profileView.container}>
          {/* <TopButton icon='team'/> */}
          { user !== null ? 
          <><UserPresentation lastName={user.lastName} firstName={user.firstName} pseudo={user.pseudo}></UserPresentation><ProfileModal data={user} callBack={test}></ProfileModal></>
          : null}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const profileView = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }
})