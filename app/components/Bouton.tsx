import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

interface BoutonProps {
    title?: string;
    onPress: () => void;
}

export default function Bouton(props: BoutonProps) {
    const { title = 'Save', onPress } = props;

    return (
        <Pressable style={styles.button} onPress={onPress}>
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
