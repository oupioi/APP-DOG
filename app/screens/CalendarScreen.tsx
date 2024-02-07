import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EventService } from '../services/EventService';}

import CardEvent from '../components/cardEvent'

export default function Calendar() {
  const [Events, SetEvents ] = useState();
  const data = getEvents();
  return (
   <CardEvent></CardEvent>
  )
}