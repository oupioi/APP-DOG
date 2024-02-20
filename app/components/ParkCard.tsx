import { View, Text, StyleSheet, Image } from "react-native";
import { ParkInterface } from "../interfaces/ParkInterface";
import { MaterialIcons } from '@expo/vector-icons';

export default function ParkCard(park: ParkInterface) {
    return (
        <View style={styles.container}>
            <MaterialIcons name="park" size={24} color="black" />
            <Text>{park.name}</Text>
            <Text>📍{park.address.address}, {park.address.zipCode} {park.address.city}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderWidth: 2,
        borderBottomWidth: 5,
        borderTopWidth: 1,
        borderRadius: 8,
        borderColor: "#c3cede",
        width: "90%",
        paddingHorizontal: 20,
        paddingVertical: 40,
        gap: 10,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    }
})

