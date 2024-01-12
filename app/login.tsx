import { View, Text, Button, StyleSheet, Pressable, TextInput} from 'react-native'
import { useState } from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyleSheet } from '../constants/GlobalStyleSheet'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Pour les validateurs
  const [errors, setErrors] = useState({});
  const handleSubmit = async () => {
    console.log(JSON.stringify({email: email, password: password}));
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
      throw new Error(json.message);
    }
    console.log(json.token);
    
    return json.token;
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <SafeAreaView style={viewStyle.main}>
      <View style={globalStyleSheet.modalForm}>
        <View style={globalStyleSheet.inputContainer}>
          <Text style={globalStyleSheet.inputLabel}>Email: </Text>
          <TextInput value={email} onChangeText={setEmail} style={globalStyleSheet.inputForm} autoCorrect={false} autoCapitalize='none' autoComplete='email' clearButtonMode='always'/>
        </View>
        <View style={globalStyleSheet.inputContainer}>
          <Text style={globalStyleSheet.inputLabel}>Password: </Text>
          <TextInput value={password} onChangeText={setPassword} style={globalStyleSheet.inputForm} secureTextEntry={true} autoCorrect={false} autoCapitalize='none' autoComplete='current-password' clearTextOnFocus={true}/>
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