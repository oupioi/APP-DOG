import { TextInput, View, Text, Pressable } from "react-native"
import { globalStyleSheet } from "../../../constants/GlobalStyleSheet"

const AlertModal = () => {
    return(
        <View style={{width: '100%', display: 'flex', alignItems: 'center', gap: 15}}>
        <View style={globalStyleSheet.modalForm}>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Titre: </Text>
            <TextInput
              style={globalStyleSheet.inputForm}
            />
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Contenu: </Text>
            <TextInput
              multiline
              keyboardType='numeric'
              style={globalStyleSheet.inputFormMultipleLine}
            />
          </View>
          <View style={globalStyleSheet.inputContainer}>
            <Text style={globalStyleSheet.inputLabel}>Code Postal: </Text>
            <TextInput
              style={globalStyleSheet.inputForm}
            />
          </View>
        </View>
            <Pressable style={globalStyleSheet.greenButton}>
              <Text style={globalStyleSheet.greenButtonText}>Save</Text>
            </Pressable>
      </View>
    )
}