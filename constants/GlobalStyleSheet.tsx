import { StyleSheet } from "react-native"

export const globalStyleSheet = StyleSheet.create({
    greenButton: {
        padding: 10,
        backgroundColor: "#6EE7B7",
        borderWidth: 2,
        borderBottomWidth: 5,
        borderColor: "#34D399",
        borderRadius: 5,
        minWidth: "50%"
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
        borderRadius: 8,
        borderColor: "#c3cede",
        width: "80%",
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
        color: "#6EE7B7"
    },
    inputForm: {
        borderRadius: 5,
        backgroundColor: "#E2E8F0",
        padding: 3,
        color: "#a3afc2",
        width: "100%",
        fontWeight: "bold"
    }
})