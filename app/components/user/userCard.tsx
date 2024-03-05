import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyleSheet } from "../../../constants/GlobalStyleSheet";

type UserCardInfos = {
    id: number;
    pseudo: string;
    firstName: string;
    lastName: string;
}

type UserCardProps = {
    data: UserCardInfos,
    callback?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({data, callback}) => {

    return (
        <>
            <Pressable style={globalStyleSheet.modalForm} onPress={callback}>
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', gap: 20, alignItems: 'center'}}>
                    <Text style={{flex: 2}}>Hello World</Text>
                    <View style={{display: 'flex', flexDirection: 'column', flex: 4}}>
                        <Text style={{fontSize: 20, marginBottom: 8}}>{data.pseudo}</Text>
                        <Text>{data.firstName} {data.lastName}</Text>
                    </View>
                </View>
            </Pressable>
        </>
    )
}

const style = StyleSheet.create({
    
})

export default UserCard;