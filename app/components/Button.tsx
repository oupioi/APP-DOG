import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

interface BouttonProps {
    backgroundColor?: string;
    title?: string;
    isClicked: boolean;
}

export default function Boutton(props: BouttonProps) {
    const { backgroundColor, title = 'Boutton', isClicked } = props;

    return (
        <Pressable style={styles.button}>
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
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
