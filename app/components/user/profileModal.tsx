import React, { useEffect, useState } from 'react';
import {Text, View, TextInput, Pressable} from 'react-native';
import { globalStyleSheet } from '../../../constants/GlobalStyleSheet';
import { PersonalInfosResponse } from '../../interfaces/ResponseBodies/PersonalInfosResponse';
import { ValidationError, bool, number, object, string } from 'yup';
import { ModifyUserRequest } from '../../interfaces/RequestBodies/ModifyUserRequest';
import { SecureStoreTool } from '../../utils/SecureStoreTool';
import { UserService } from '../../services/UserService';

type ProfileProps = {
    data: PersonalInfosResponse,
}

const ProfileModal: React.FC<ProfileProps> = ({data}) => {
    
    const userService = new UserService();
    const [userId, setUserId] = useState<string|false>(false);
    useEffect(() => {
      const getUserId = async () => {
        const found = await SecureStoreTool.getItem('user_id');
        setUserId(found);
      }

      getUserId();
    }, [])
    
    const [email, setEmail] = useState<string>(data.email);
    const [pseudo, setPseudo] = useState<string>(data.pseudo);
    /** @todo Modifier le password seulement s'il est rempli */
    const [password, setPassword] = useState<string|undefined>(undefined);
    const [firstName, setFirstName] = useState<string>(data.firstName);
    /** @todo Ajouter un datepicker */
    const [lastName, setLastName] = useState<string>(data.lastName);
    const [birthdate, setBirthdate] = useState<string>(new Date(data.birthdate).toLocaleDateString('fr-FR'));
    const [notifyFriends, setNotifyFriends] = useState<boolean>(data.notifyFriends);
    const [address, setAddress] = useState<string>(data.address.address);
    const [zipCode, setZipCode] = useState<number>(data.address.zipCode);
    const [city, setCity] = useState<string>(data.address.city);

    const [errorMsg, setErrorMsg] = useState<string|null>(null);
    const [validationMsg, setValidationMsg] = useState<boolean>(false);


    let schema = object<ModifyUserRequest>({
        email: string().email('Must be a valid email').required('Email is required'),
        pseudo: string().required('Pseudo is required'),
        password: string().min(7, 'Password must be of 7 caracters minimum'),
        firstName: string().required('First name is required'),
        lastName: string().required('Last name is required'),
        birthdate: string().required('Birthdate is required'),
        notifyFriends: bool(),
        address: string(),
        zipCode: number().required('Zip code is required'),
        city: string().required('City is required'),
      });

    const handleSubmit = async () => {
        if (userId) {
            const requestBody = {
                id: parseInt(userId),
                email: email,
                pseudo: pseudo,
                password: password,
                firstName: firstName,
                lastName: lastName,
                birthdate: birthdate,
                notifyFriends: notifyFriends,
                address: address,
                zipCode: zipCode,
                city: city,
                // @todo Changer ça
                sex: {
                    id: 1,
                    name: 'Homme'
                }
            }
            try {
                await schema.validate(requestBody);
            } catch (error) {
                console.log(error);
                
                if (error instanceof ValidationError) {
                    setErrorMsg(error.errors[0]);
                    console.log(errorMsg);
                    return;
                }
            }

            try {
                await userService.updateUserInfos({
                    id: parseInt(userId),
                    email: email,
                    pseudo: pseudo,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    birthdate: birthdate,
                    notifyFriends: notifyFriends,
                    address: {
                        address: address,
                        zipCode: zipCode,
                        city: city
                    },
                    // @todo Changer ça
                    sex: {
                        id: 1,
                        name: 'Homme'
                    }
                });
                setValidationMsg(true);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
    }

// @todo transformer les input container en Components (callback setEmail() par exemple)
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
            <TextInput autoCapitalize='none' secureTextEntry={true} autoCorrect={false} style={globalStyleSheet.inputForm} onChangeText={setPassword} defaultValue={undefined}/>
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
            <TextInput style={globalStyleSheet.inputForm} onChangeText={setBirthdate} defaultValue={birthdate}/>
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
        {errorMsg ? <Text style={globalStyleSheet.formError}>{errorMsg}</Text> : null}
        {validationMsg ? <Text style={globalStyleSheet.validationMsg}>Modifications applied</Text> : null}
        <Pressable style={[globalStyleSheet.greenButton, {marginTop: 20}]} onPress={handleSubmit}><Text style={globalStyleSheet.greenButtonText}>Save</Text>
        </Pressable>
    </View>
  )
};

export default ProfileModal;