import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserService } from '../../services/UserService';
import { globalStyleSheet } from '../../../constants/GlobalStyleSheet';
import { PersonalInfosResponse } from '../../interfaces/ResponseBodies/PersonalInfosResponse';
import { KeyboardAvoidingView } from 'react-native';

/** @todo Changer le formulaire */
export default function Profile() {

  const [email, setEmail] = useState<string>("");
  const [pseudo, setPseudo] = useState<string>("");
  /** @todo Modifier le password seulement s'il est rempli */
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  /** @todo Ajouter un datepicker */
  const [lastName, setLastName] = useState<string>("");
  const [birthDate, setBirthdate] = useState<string|undefined>(undefined);
  const [notifyFriends, setSetNotifyFriends] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [zipCode, setZipCode] = useState<number|null>(null);
  const [city, setCity] = useState<string>("");


  const userService = new UserService(); 
  const getUserData = async () => {
    try {
      const response = await userService.getPersonalInfos();

      setEmail(response.email);
      setPseudo(response.pseudo);
      setFirstName(response.firstName);
      setLastName(response.lastName);
      setBirthdate(new Date(response.birthdate).toLocaleDateString("fr-FR"));
      setSetNotifyFriends(response.notifyFriends);
      setAddress(response.address.address);
      setZipCode(response.address.zipCode);
      setCity(response.address.city);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData()
  }, []);


  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={profileView.container}>
        <View style={globalStyleSheet.modalForm}>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Email</Text>
            <TextInput style={globalStyleSheet.inputForm} onChangeText={setEmail} defaultValue={email}/>
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Pseudo</Text>
            <TextInput style={globalStyleSheet.inputForm} onChangeText={setPseudo} defaultValue={pseudo}/>
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>New password</Text>
            <TextInput style={globalStyleSheet.inputForm} onChangeText={setPassword} defaultValue={undefined}/>
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>First name</Text>
            <TextInput style={globalStyleSheet.inputForm} onChangeText={setFirstName} defaultValue={firstName}/>
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Last name</Text>
            <TextInput style={globalStyleSheet.inputForm} onChangeText={setLastName} defaultValue={lastName}/>
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Birthdate</Text>
            <TextInput style={globalStyleSheet.inputForm} onChangeText={setBirthdate} defaultValue={birthDate}/>
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Notify friends</Text>
            <TextInput style={globalStyleSheet.inputForm} onChangeText={(value) => {setEmail(new Date(value).toString())}} defaultValue={notifyFriends.toString()}/>
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Address</Text>
            <TextInput style={globalStyleSheet.inputForm} onChangeText={setAddress} defaultValue={address}/>
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Zipcode</Text>
            <TextInput style={globalStyleSheet.inputForm} onChangeText={(value) => {setZipCode(parseInt(value))}} defaultValue={zipCode?.toString()}/>
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>City</Text>
            <TextInput style={globalStyleSheet.inputForm} onChangeText={setCity} defaultValue={city}/>
          </View>
        </View>
        <Pressable style={[globalStyleSheet.greenButton, {marginTop: 20}]} onPress={
          () => {
            /** @todo Appliquer les modifs */ 
            console.log({
              pseudo: pseudo,
              email: email,
              password: password
            });
        }}>
          <Text style={globalStyleSheet.greenButtonText}>Save</Text>
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
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