import React, { ReactElement, ReactNode } from 'react';
import {Text, View, StyleSheet} from 'react-native';

type HeaderProps = {
    name: string;
    children?: ReactNode
}
const DefaultHeader: React.FC<HeaderProps> = ({name, children}) => {
    return (
        <View style={s$.header}>
            <>
                <Text style={s$.headerTitle}>{name}</Text>
                <View style={s$.circleShape}></View>
            </>
            <View style={{display: 'flex', flexDirection: 'row', gap: 10,alignItems: 'flex-start', marginRight: 20, justifyContent: 'flex-end'}}>
                {children}
            </View>
        </View>
    )
}

const s$ = StyleSheet.create({
    header: {
        marginTop: 80,
        position: 'relative',
        width: '100%',
        marginBottom: 0,
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'space-between'
    },
    headerTitle: {
        marginLeft: 20,
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