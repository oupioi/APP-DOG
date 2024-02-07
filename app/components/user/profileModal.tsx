import React, { useState } from 'react';
import {Text, View, TextInput, Pressable} from 'react-native';
import { globalStyleSheet } from '../../../constants/GlobalStyleSheet';
import { PersonalInfosResponse } from '../../interfaces/ResponseBodies/PersonalInfosResponse';

type ProfileProps = {
    data: PersonalInfosResponse,
    callBack: () => void;
}

const ProfileModal: React.FC<ProfileProps> = ({data, callBack}) => {

    const [email, setEmail] = useState<string>(data.email);
    const [pseudo, setPseudo] = useState<string>(data.pseudo);
    /** @todo Modifier le password seulement s'il est rempli */
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>(data.firstName);
    /** @todo Ajouter un datepicker */
    const [lastName, setLastName] = useState<string>(data.lastName);
    const [birthDate, setBirthdate] = useState<string|undefined>(new Date(data.birthdate).toLocaleDateString('fr-FR'));
    const [notifyFriends, setSetNotifyFriends] = useState<boolean>(data.notifyFriends);
    const [address, setAddress] = useState<string>(data.address.address);
    const [zipCode, setZipCode] = useState<number|null>(data.address.zipCode);
    const [city, setCity] = useState<string>(data.address.city);

  return ( 
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
        <Pressable style={[globalStyleSheet.greenButton, {marginTop: 20}]} onPress={callBack}><Text style={globalStyleSheet.greenButtonText}>Save</Text>
        </Pressable>
    </View>
  )
};

export default ProfileModal;