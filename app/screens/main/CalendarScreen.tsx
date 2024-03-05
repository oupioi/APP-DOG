import { View, Text, ScrollView, Button, Alert, Pressable, RefreshControl } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { EventService } from '../../services/EventService';
import { EventInterface } from '../../interfaces/EventInterface';
import EventCard from '../../components/EventCard';
import { StyleSheet } from 'react-native';
import Bouton from '../../components/Bouton';

const eventService = new EventService();

export default function Calendar() {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getEvents();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

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

  const styles = StyleSheet.create({
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 90,
      marginTop: 10
    }
  });

  const getFutureEvents = async () => {
    try {
      const list = await eventService.getfuturEvent();
      setEvents(list.events);
    } catch (error) {
      console.log(error);
    }
  }

  const getPastEvents = async () => {
    try {
      const list = await eventService.getpastEvent();
      setEvents(list.events);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <View style={styles.fixToText}>
      <Bouton title="A venir" function1={getFutureEvents}/>
      <Bouton title="Passés"  function1={getPastEvents}/>
    </View>
      <ScrollView
        style={{
          marginHorizontal: 20,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {events.map((event) => (
          <EventCard key={String(event.id)} {...event} />
        ))}
      </ScrollView>
    </View>
  );  
}