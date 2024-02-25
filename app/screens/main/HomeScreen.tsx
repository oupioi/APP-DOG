import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { ParkService } from '../../services/ParkService';
import { ParkInterface } from '../../interfaces/ParkInterface';
import ParkCard from '../../components/ParkCard';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import DefaultHeader from '../../components/headers/defaultHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const parkService = new ParkService();

const MapScreen = () => {

  const [parks, setParks] = useState<ParkInterface[]>([]);

  useEffect(() => {
    getParks();
  }, []);

  const getParks = async () => {
    try {
      const response = await parkService.getAllParks();
      setParks(response.parks);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <DefaultHeader name='Home' />
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Text style={styles.header}>Parcs :</Text>
          <TouchableOpacity onPress={() => console.log('Afficher tous les parcs')}>
            <Link href={"/screens/main/park/ParkScreen"} style={{}} >Afficher tout les parcs</Link>
          </TouchableOpacity>
        </View>
        <FlatList
          data={parks}
          renderItem={({ item }) => <ParkCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  header: {
    alignSelf: "flex-start",
    marginLeft: 5,
    marginBottom: 5
  }
});

export default MapScreen;