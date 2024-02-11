import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EventService } from '../services/EventService';
import { EventInterface } from '../interfaces/EventInterface';

export default function Calendar() {
  const e = new EventService();
  let data = e.getEvents()
  const [events, setEvents] = useState<EventInterface[]>([])
  data.then((res) => {
    // setEvents(res)
  })

  return (
    <View>
      {events.map((event, index) => {
        return (
          <View key={index}>
            <Text>{event.title}</Text>
          </View>
        )
      })}
    </View>
  )
}