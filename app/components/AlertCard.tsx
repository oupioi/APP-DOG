import { View, Text, StyleSheet } from "react-native";
import { AlertInterface } from "../interfaces/AlertInterface";
import { Foundation } from '@expo/vector-icons';

export default function AlertCard(alert: AlertInterface) {
    return (
        <View style={styles.container}>
            <Foundation name="alert" size={24} color="black" />
            <Text>{alert.title}</Text>
            <Text>{alert.created_at.getDate()}</Text>
            <Text>{alert.content}</Text>
            <Text>{alert.zip_code}</Text>
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
    }
})