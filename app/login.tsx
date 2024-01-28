import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyleSheet } from '../constants/GlobalStyleSheet'
import { SecureStoreTool } from '../tools/SecureStoreTool'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    getToken()
  }, []);
  let token: false|string = false;
  const getToken = async () => {token = await SecureStoreTool.getItem('token')};
  if (token) {
    router.replace('/first_page');
  }

  // Pour les validateurs
  const [errors, setErrors] = useState({});
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/customer/login", {
      method:"POST",
      body: JSON.stringify({email: email, password: password}),
      headers: {
        'Content-Type': 'application/json'
      } 
    });
    const json = await response.json();
    if (response.status !== 200) {
      console.log('là');
      
      throw new Error(json.message);
    }
    console.log(json.user_id);
    
    await SecureStoreTool.save("token", json.token);
    await SecureStoreTool.save("user_id", json.user_id.toString());
    
    console.log('token dans le storage', token);
    router.replace('/first_page');
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <SafeAreaView style={viewStyle.main}>
      <View style={globalStyleSheet.modalForm}>
        <View style={globalStyleSheet.inputContainer}>
          <Text style={globalStyleSheet.inputLabel}>Email: </Text>
          <TextInput textContentType='emailAddress' value={email} onChangeText={setEmail} style={globalStyleSheet.inputForm} autoCorrect={false} autoCapitalize='none' autoComplete='email' clearButtonMode='always'/>
        </View>
        <View style={globalStyleSheet.inputContainer}>
          <Text style={globalStyleSheet.inputLabel}>Password: </Text>
          <TextInput textContentType='password' value={password} onChangeText={setPassword} style={globalStyleSheet.inputForm} secureTextEntry={true} autoCorrect={false} autoCapitalize='none' autoComplete='current-password' clearTextOnFocus={true}/>
        </View>
      </View>

      <Pressable style={globalStyleSheet.greenButton} onPress={handleSubmit}>
        <Text style={globalStyleSheet.greenButtonText}>Login</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const viewStyle = StyleSheet.create({
  main: {
    flex:1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  }
})