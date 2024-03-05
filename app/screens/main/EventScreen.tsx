import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import EventCardMap from '../../components/EventCardMap';
import { EventInterface } from '../../interfaces/EventInterface';
import { EventService } from '../../services/EventService';

export default function EventScreen() {
  const eventId = useLocalSearchParams().id as unknown as number;
  const eventService = new EventService();
  const [event, setEvent] = useState<EventInterface>();

  const initialRegion = {
    latitude: 50.629970470934644,
    longitude: 3.0588665221969564,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    getEvent();
  }, [eventId]);

  const getEvent = async () => {
    try {
      const fetchedEvent = await eventService.getEventById(eventId);
      setEvent(fetchedEvent);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={{ width: '100%', height: '100%' }} initialRegion={initialRegion} />
      <EventCardMap {...event!} />
    </View>
  );
}