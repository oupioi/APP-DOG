import React, { useEffect, useState } from 'react';
import {Text, View, TextInput, Pressable, Button} from 'react-native';
import { globalStyleSheet } from '../../../constants/GlobalStyleSheet';
import { PersonalInfosResponse } from '../../interfaces/ResponseBodies/PersonalInfosResponse';
import { bool, number, object, string } from 'yup';
import { ModifyUserRequest } from '../../interfaces/RequestBodies/ModifyUserRequest';
import { UserService } from '../../services/UserService';
import { Formik } from 'formik';

type ProfileProps = {
    data: PersonalInfosResponse,
    refreshUser: () => Promise<void>
}

/** @todo Recevoir de "data" les données nécessaires au type ModifyUserRequest à la place ? */
const ProfileModal: React.FC<ProfileProps> = ({data, refreshUser}) => {
    
    const userService = new UserService();

    let schema = object().shape(
      {
        email: string().email('Must be a valid email').required('Email is required'),
        pseudo: string().required('Pseudo is required'),
        password: string().min(7, 'Password must be of 7 caracters minimum'),
        firstName: string().required('First name is required'),
        lastName: string().required('Last name is required'),
        // birthdate: string().required('Birthdate is required'),
        notifyFriends: bool().nullable(),
        address: object().shape({
          address: string().nullable(),
          zipCode: number().required('Zip code is required'),
          city: string().required('City is required')
        })
      });
    const modifyUser = async (values: ModifyUserRequest) => {
      try {
        await userService.updateUserInfos(values);
        refreshUser();
      } catch (error) {
        console.log(error);
      }
    }

// @todo transformer les input container en Components (callback setEmail() par exemple)
  return (
    <Formik validationSchema={schema} initialValues={data as ModifyUserRequest} onSubmit={values => modifyUser(values)}>
      {({ handleChange, handleBlur, handleSubmit, values, isValid, errors}) => (
        <View style={{width: '100%', display: 'flex', alignItems: 'center', gap: 15}}>
        <View style={globalStyleSheet.modalForm}>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Email: </Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              defaultValue={values.email}
              style={globalStyleSheet.inputForm}
            />
            {errors.email &&
              <Text style={globalStyleSheet.formError}>{errors.email}</Text>
            }
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Pseudo: </Text>
            <TextInput
              onChangeText={handleChange('pseudo')}
              onBlur={handleBlur('pseudo')}
              defaultValue={values.pseudo}
              style={globalStyleSheet.inputForm}
            />
            {errors.pseudo &&
              <Text style={globalStyleSheet.formError}>{errors.pseudo}</Text>
            }
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>New password: </Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              defaultValue={''}
              style={globalStyleSheet.inputForm}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
              clearTextOnFocus={true}
            />
            {errors.password &&
              <Text style={globalStyleSheet.formError}>{errors.password}</Text>
            }
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>First name: </Text>
            <TextInput
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              defaultValue={data.firstName}
              style={globalStyleSheet.inputForm}
            />
            {errors.firstName &&
              <Text style={globalStyleSheet.formError}>{errors.firstName}</Text>
            }
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Last name: </Text>
            <TextInput
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              defaultValue={data.lastName}
              style={globalStyleSheet.inputForm}
            />
            {errors.lastName &&
              <Text style={globalStyleSheet.formError}>{errors.lastName}</Text>
            }
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Birthdate: </Text>
            <TextInput
              onChangeText={handleChange('birthdate')}
              onBlur={handleBlur('birthdate')}
              defaultValue={new Date(data.birthdate).toLocaleDateString('fr-FR')}
              style={globalStyleSheet.inputForm}
            />
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Address: </Text>
            <TextInput
              onChangeText={handleChange('address.address')}
              onBlur={handleBlur('address.address')}
              defaultValue={values.address.address}
              style={globalStyleSheet.inputForm}
            />
            {errors.address?.address &&
              <Text style={globalStyleSheet.formError}>{errors.address?.address}</Text>
            }
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Zip code: </Text>
            <TextInput
              onChangeText={handleChange('address.zipCode')}
              onBlur={handleBlur('address.zipCode')}
              defaultValue={data.address?.zipCode.toString()}
              style={globalStyleSheet.inputForm}
            />
            {errors.address?.zipCode &&
              <Text style={globalStyleSheet.formError}>{errors.address?.zipCode}</Text>
            }
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>City: </Text>
            <TextInput
              onChangeText={handleChange('address.city')}
              onBlur={handleBlur('address.city')}
              defaultValue={values.address.city}
              style={globalStyleSheet.inputForm}
            />
            {errors.address?.city &&
              <Text style={globalStyleSheet.formError}>{errors.address?.city}</Text>
            }
          </View>
          
        </View>
          {isValid ? 
            <Pressable style={globalStyleSheet.greenButton} onPress={handleSubmit}>
              <Text style={globalStyleSheet.greenButtonText}>Save</Text>
            </Pressable>
          : null}
      </View>
     )}
    </Formik>
  )
};

export default ProfileModal;