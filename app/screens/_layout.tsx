import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

export default function _layout() {

    // ne plus avoir la header bar
    return (
        <Stack screenOptions={{ headerShown: false }}> 
        </Stack>
    )
}