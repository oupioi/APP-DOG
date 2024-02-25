import { View, Text, StyleSheet, Image, ViewStyle } from "react-native";
import { ParkInterface } from "../interfaces/ParkInterface";
import { MaterialIcons } from '@expo/vector-icons';

export default function ParkCard(park: ParkInterface){
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
        paddingHorizontal: 5,
        paddingVertical: 10,
        gap: 5,
        alignItems: 'center',
        width: 300,
        marginRight: 20
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    }
})