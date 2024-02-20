import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { ParkService } from '../../services/ParkService';
import { ParkInterface } from '../../interfaces/ParkInterface';
import ParkCard from '../../components/ParkCard';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import DefaultHeader from '../../components/headers/defaultHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <DefaultHeader name='Home'></DefaultHeader>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          {/* <MapView style={styles.map} /> */}
          {
            parks.map((park) => (
              <ParkCard key={park.id} {...park} />
            ))
          }
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    gap: 10
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;