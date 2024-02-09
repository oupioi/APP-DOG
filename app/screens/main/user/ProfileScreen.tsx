import { StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserService } from '../../../services/UserService';
import { PersonalInfosResponse } from '../../../interfaces/ResponseBodies/PersonalInfosResponse';
import { KeyboardAvoidingView } from 'react-native';
import UserPresentation from '../../../components/user/userPresentation';
import ProfileModal from '../../../components/user/profileModal';

/** @todo Changer le formulaire */
export default function Profile() {

  const [user, setUser] = useState<PersonalInfosResponse|null>(null);

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
          <>
            <UserPresentation lastName={user.lastName} firstName={user.firstName} pseudo={user.pseudo}/>
            <ProfileModal data={user} refreshUser={getUserData}/>
          </>
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