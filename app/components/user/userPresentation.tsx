import React from "react";
import { StyleSheet, View, Text } from "react-native";

type UserPresentationProps = {
    firstName: string;
    lastName: string;
    pseudo: string;
}
const UserPresentation: React.FC<UserPresentationProps> = (props) => {
    return (
        <View style={s$.container}>
            <View style={s$.circleShape}></View>
            <Text style={s$.names}>{props.firstName} {props.lastName}</Text>
            <Text>{props.pseudo}</Text>
        </View>
    )
}

const s$ = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 25
    },
    names: {
        fontSize: 30,
        fontWeight: "600"
    },
    circleShape: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 10,
        borderColor: 'black'
    }
});

export default UserPresentation;