import { StyleSheet } from "react-native"

export const globalStyleSheet = StyleSheet.create({
    greenButton: {
        padding: 10,
        backgroundColor: "#6EE7B7",
        borderWidth: 2,
        borderBottomWidth: 5,
        borderColor: "#34D399",
        borderRadius: 5,
        width: "60%"
    },
    greenButtonText: {
        color: "#ECFDF5",
        textAlign: "center",
        fontSize: 20
    },
    modalForm: {
        backgroundColor: "white",
        borderWidth: 2,
        borderBottomWidth: 5,
        borderTopWidth: 1,
        borderRadius: 8,
        borderColor: "#c3cede",
        width: "90%",
        paddingHorizontal: 20,
        paddingVertical: 40,
        gap: 10
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        gap: 5,
    },
    inputLabel: {
        fontWeight: "bold",
        color: "#6EE7B7",
        fontSize: 19
    },
    inputForm: {
        borderRadius: 5,
        backgroundColor: "#f0f2f5",
        padding: 3,
        color: "#a3afc2",
        width: "100%",
        fontWeight: "bold",
        fontSize: 17
    },
    formError: {
        color: "red",
        fontSize: 12
    }
})