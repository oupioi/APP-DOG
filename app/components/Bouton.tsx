import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../../constants/Colors';
interface BoutonProps {
    title?: string;
    function1: () => void;
}

export default function Bouton(props: BoutonProps) {
    const { title = 'Boutton', function1 } = props;

    return (
        <Pressable style={styles.button} onPress={function1}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
