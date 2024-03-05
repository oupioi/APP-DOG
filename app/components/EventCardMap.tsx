import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { EventInterface } from '../interfaces/EventInterface'

export default function EventCardMap(event: EventInterface) {
    const convertDate = (date: Date) => {
        const d = new Date(date);
        return d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  return (
    <View style={styles.card}>
        <Text style={styles.title}>{event?.title}</Text>
        <Text style={styles.unite}>{convertDate(event?.date)}</Text>
        <Text style={styles.subtitle}>Lieu</Text>
        <Text style={styles.unite}>{event?.address?.zipCode}</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.subtitle}>Temps</Text>
        <Text style={styles.subtitle}>Distance</Text>
        <Text style={styles.subtitle}>Allure</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.unite}>30.30</Text>
        <Text style={styles.unite}>5,5KM</Text>
        <Text style={styles.unite}>5'30''</Text>

        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card : {
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      position: 'absolute',
      padding: 10,
      bottom: 56,
      left : 10,
      right : 10,
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8,
    },
    subtitle : {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 8,
        paddingRight: 45,
    },
    description : {
        fontSize: 16,
        paddingTop: 8,
    },
    unite : {
        fontSize: 15.5,
        paddingRight: 70,
        paddingBottom: 8,
        color: 'grey',
        
    }
    });