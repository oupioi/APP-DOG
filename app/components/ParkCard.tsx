import { View, Text, StyleSheet, Image, ViewStyle } from "react-native";
import { ParkInterface } from "../interfaces/ParkInterface";
import { MaterialIcons } from '@expo/vector-icons';

export default function ParkCard(park: ParkInterface) {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <MaterialIcons name="park" size={24} color="black" />
                <Text>{park.name}</Text>
            </View>
            <Text style={{ marginLeft: 20 }}>📍{park.address.address}, {park.address.zipCode} {park.address.city}</Text>
            <Text style={{ marginLeft: 20 }} /*todo: afficher la note moyenne du park sous forme d'étoile ⭐*/>Note : ⭐⭐⭐⭐⭐</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderWidth: 2,
        borderBottomWidth: 5,
        borderTopWidth: 1,
        borderRadius: 8,
        borderColor: "#c3cede",
        paddingHorizontal: 5,
        paddingVertical: 10,
        gap: 5,
        width: 300,
        marginRight: 20
    },
})