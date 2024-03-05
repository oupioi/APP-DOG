import { StyleSheet, ScrollView, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserService } from "../../../services/UserService";
import { KeyboardAvoidingView } from "react-native";
import DefaultHeader from "../../../components/headers/defaultHeader";
import UserCard from "../../../components/user/userCard";
import { FriendsResponse, PendingRequestsResponse } from "../../../interfaces/ResponseBodies/FriendsResponse";
import TopButton from "../../../components/headers/topButton";

/** @todo Changer le formulaire */
export default function Profile() {
  const [friends, setFriends] = useState<FriendsResponse | null>(null);
  const [pendingRequests, setPendingRequests] = useState<PendingRequestsResponse | null>(null);
  const [display, setDisplay] = useState<'friends'|'pendingRequests'>('friends');


  const userService = new UserService();
  const getUserFriends = async () => {
    // Récupérer la liste des amis/demandes d'amis de l'utilisateur
    try {
        const friendsData = await userService.getFriends();
        setFriends(friendsData);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserFriendRequests = async () => {
    try {
      const requestsData = await userService.getFriendRequests();
      setPendingRequests(requestsData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserFriends();
    getUserFriendRequests();
  }, []);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <DefaultHeader name="Friends">
          <TopButton color="#64748B" icon="user" callBack={() => { console.log('router.push(page de recherche d\'amis')}}/>
        </DefaultHeader>
        <SafeAreaView style={profileView.container}>
        <View style={profileView.tabsContainer}>
        <Pressable onPress={() => {setDisplay('pendingRequests')}}>
          <Text>Pending friend requests</Text>
        </Pressable>
        <Pressable onPress={() => {setDisplay('friends')}}>
          <Text>Friends</Text>
        </Pressable>
        </View>
          {display === 'friends' && friends !== null
            ?
            friends.friends.map((friend) => {
                return (
                  <UserCard
                    data={{
                      id: friend.id,
                      pseudo: friend.pseudo,
                      firstName: friend.firstName,
                      lastName: friend.lastName,
                    }}
                  />
                );
              })
            :""}
          {display === 'pendingRequests' && pendingRequests !== null
            ?
            pendingRequests.requests.map((request) => {
                return (
                  <UserCard
                    data={{
                      id: request.id,
                      pseudo: request.pseudo,
                      firstName: request.firstName,
                      lastName: request.lastName,
                    }}
                  />
                );
              })
            : ""}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const profileView = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});
