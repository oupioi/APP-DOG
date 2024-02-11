import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EventService } from '../services/EventService';
import { EventData, EventInterface } from '../interfaces/EventInterface';

export default function Calendar() {
  const e = new EventService();
  let data = e.getEvents()
  const [events, setEvents] = useState<EventData[]>([])
  data.then((res) => {
    setEvents(res)
  })

  return (
    <View>
      <Text>Calendar</Text>
      <Text>{events[0].events[0].title}</Text>
    </View>
  )
}