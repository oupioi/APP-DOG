import { View, Text, ScrollView, Button, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EventService } from '../../services/EventService';
import { EventInterface } from '../../interfaces/EventInterface';
import EventCard from '../../components/EventCard';
import { StyleSheet } from 'react-native';


const eventService = new EventService();

export default function Calendar() {
  const [events, setEvents] = useState<EventInterface[]>([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const list = await eventService.getEvents();
      setEvents(list.events);
    } catch (error) {
      console.log(error);
    }
  };

  const getAdress = async (id: number) => {
    try {
      const address = await eventService.getAddress(id);
      return address;
    } catch (error) {
      console.log(error);
    }
  }

  const styles = StyleSheet.create({
    fixToText: {
      flexDirection: 'row'
    },
    button : {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4.5,
      paddingVertical: 10,
      paddingHorizontal: 20
    }
  });


  return (
    <View>
      <View style={styles.fixToText}>
      <Pressable style={styles.button}>
      <Text>À Venir</Text>
      </Pressable>
      <Pressable style={styles.button}>
      <Text>Passé</Text>
      </Pressable>
    </View>
      <ScrollView
        style={{
          marginHorizontal: 20,
        }}
      >
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </ScrollView>
    </View>
  );  
}