import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

type HeaderProps = {
    name: string;
}
const DefaultHeader: React.FC<HeaderProps> = ({name}) => {
    return (
        <View style={s$.header}><Text style={s$.headerTitle}>{name}</Text><View style={s$.circleShape}></View></View>
    )
}

const s$ = StyleSheet.create({
    header: {
        marginTop: 80,
        marginLeft: 20,
        position: 'relative',
        width: 100,
        marginBottom: 0,
        height: 60,
        backgroundColor: 'transparent'
    },
    headerTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: '800'
    },
    circleShape: {
        backgroundColor: '#64748B',
        width: 270,
        height: 250,
        borderRadius:1000,
        position: 'absolute',
        left: -120,
        top: -180,
        zIndex: -1
    }
})

export default DefaultHeader;