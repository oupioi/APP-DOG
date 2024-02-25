import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { EventInterface } from '../interfaces/EventInterface'

export default function EventCard(event : EventInterface) {

  const convertDate = (date: Date) => {
    const d = new Date(date);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://icons8.com/icon/19821/dog-park'}}/>
      <Text style={styles.title}>{event?.title}</Text>
      <Text style={styles.other}>📍  Code Postal</Text>
      <Text style={styles.other}>📅  {convertDate(event?.date)} </Text>
      <Text style={styles.description}> Description : {event?.description}</Text>
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
    marginHorizontal: 4.5,
    marginVertical: 6,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  description: {
    fontSize: 16,
    paddingTop: 8,
  },
  other : {
    fontSize: 15,
    paddingBottom: 8,
    color: 'grey'
  }
});