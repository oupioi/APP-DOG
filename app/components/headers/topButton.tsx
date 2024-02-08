import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

type TopButtonProps = {
    icon: 'team';
    color: string;
    callBack?: () => void; 
}

const TopButton: React.FC<TopButtonProps> = (props) => {

    return (
        <Pressable onPress={props.callBack !== null ? props.callBack : null} style={[s$.button, {borderColor: props.color}]}>
        <AntDesign name={props.icon} size={24} color={props.color}/>
        {/* <AntDesign style={[s$.button, props.position !== 1 ? {right: 30} : {right: 20}]} name={props.icon} size={24} color="black"/> */}
    </Pressable>
    )
}

const s$ = StyleSheet.create({
    button: {
        // zIndex: 2,
        padding: 3,
        marginRight: 20,
        borderWidth:2,
        borderRadius: 50
    }
});

export default TopButton