import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyleSheet } from '../../constants/GlobalStyleSheet';
import { SecureStoreTool } from '../utils/SecureStoreTool';
import { object, string, ValidationError } from 'yup';
import { UserService } from '../services/UserService';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string|null>(null);
  const userService = new UserService();

  useEffect(() => {
    getToken();
  }, []);

  let loginSchema = object({
    email: string().email('Must be a valid email').required('Email is required'),
    password: string().required('Password is required')
  });

  const getToken = async () => {
    const token = await SecureStoreTool.getItem('token');
    if (token) {
      router.replace('/screens/HomeScreen');
    }
  };

  const handleSubmit = async () => {
    try {
      try {
        await loginSchema.validate({email: email, password: password});
      } catch (error) {
        if (error instanceof ValidationError) {
          setErrorMsg(error.errors[0]);
          return;
        }
      }
      await userService.login({email: email, password: password});

      router.replace('/screens/HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={viewStyle.main}>
      <View style={globalStyleSheet.modalForm}>
        <View style={globalStyleSheet.inputContainer}>
          <Text style={globalStyleSheet.inputLabel}>Email: </Text>
          <TextInput
            textContentType='emailAddress'
            value={email}
            onChangeText={setEmail}
            style={globalStyleSheet.inputForm}
            autoCorrect={false}
            autoCapitalize='none'
            autoComplete='email'
            clearButtonMode='always'
          />
        </View>
        <View style={globalStyleSheet.inputContainer}>
          <Text style={globalStyleSheet.inputLabel}>Password: </Text>
          <TextInput
            textContentType='password'
            value={password}
            onChangeText={setPassword}
            style={globalStyleSheet.inputForm}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize='none'
            autoComplete='current-password'
            clearTextOnFocus={true}
          />
        </View>
        {errorMsg ? <Text style={globalStyleSheet.formError}>{errorMsg}</Text> : null}
      </View>

      <Pressable style={globalStyleSheet.greenButton} onPress={handleSubmit}>
         <Text style={globalStyleSheet.greenButtonText}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const viewStyle = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
