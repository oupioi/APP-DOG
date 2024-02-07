import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { EventInterface } from '../interfaces/EventInterface'

export default function EventCard(event : EventInterface|null) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event?.title}</Text>
      <Text style={styles.description}>{event?.description}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});