import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, router } from 'expo-router';
import { useEffect, useState } from "react";
import { SecureStoreTool } from "./utils/SecureStoreTool";

export default function Page() {

  

  useEffect(() => {
    const getStoredUser = async () => {
      //await SecureStoreTool.delete('token')
      const foundToken = await SecureStoreTool.getItem('token');
      const foundId = await SecureStoreTool.getItem('user_id');
  
      if (foundToken && foundId) {
        router.replace('/screens/main/HomeScreen')
      } else {
        router.replace('/screens/auth/LoginScreen');
      }
    }
    getStoredUser()
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Dog APP 🐶</Text>
      </View>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
