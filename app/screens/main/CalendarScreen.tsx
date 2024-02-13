import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EventService } from '../../services/EventService';
import { EventInterface } from '../../interfaces/EventInterface';
import EventCard from '../../components/EventCard';

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

  return (
    <View>
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