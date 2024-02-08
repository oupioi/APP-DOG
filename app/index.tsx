import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, router } from 'expo-router';
import { useEffect, useState } from "react";
import { SecureStoreTool } from "./utils/SecureStoreTool";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const getStoredUser = async () => {
    // await SecureStoreTool.delete('token')
    const foundToken = await SecureStoreTool.getItem('token');
    const foundId = await SecureStoreTool.getItem('user_id');

    setIsLoading(false);
    setIsAuth(foundToken && foundId ? true : false);
  }

  useEffect(() => {
    getStoredUser()
  }, [])

  useEffect(() => {
    if (isAuth === true) {
      router.replace('/screens/HomeScreen')
    }
  }, [isAuth])
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Dog APP 🐶</Text>
          { isLoading === false && isAuth === false ? 
          <>
            <Link href="/screens/register/LoginScreen">Login</Link>
            <Link href="/screens/register/RegisterScreen">Register</Link>
          </>
          : null}
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
