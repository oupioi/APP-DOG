import { useEffect, useState } from "react";
import { ParkService } from "../../services/ParkService";
import { ParkInterface } from "../../interfaces/ParkInterface";
import DefaultHeader from "../../components/headers/defaultHeader";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import ParkCard from "../../components/ParkCard";


const parkService = new ParkService();

const ParkScreen = () => {
    const [parks, setParks] = useState<ParkInterface[]>([]);

    useEffect(() => {
        getParks();
    }, []);

    const getParks = async () => {
        try {
            const response = await parkService.getAllParks();
            setParks(response.parks);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <DefaultHeader name='Parcs'></DefaultHeader>
            <View style={styles.search}>
                <Text>
                    Recherche
                </Text>
            </View>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {
                        parks.map((park) => (
                            <ParkCard key={park.id} {...park} />
                        ))
                    }
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        gap: 10,
        marginTop: 10
    },
    search: {
        height: 20,
        alignItems: 'center'
    }
});

export default ParkScreen;