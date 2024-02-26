import { useEffect, useState } from "react";
import { ParkInterface } from "../interfaces/ParkInterface";
import { ErrorResponse } from "../interfaces/ResponseBodies/ErrorResponse";
import { ParkService } from "../services/ParkService";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import ParkCard from "../components/ParkCard";

export default function ParkScreen() {

    const [parks, setParks] = useState<ParkInterface[]>([]);
    const parkService = new ParkService();

    const getParks = async () => {
        try {
            const response = await parkService.getAllParks();
            console.log(response);
            setParks(response.parks);

        } catch (error) {
            throw error as ErrorResponse
        }
    }

    useEffect(() => {
        getParks();
    }, []);


    return (
        <SafeAreaView>
            {
                parks.map((park: ParkInterface) => (
                    <ParkCard {...park}></ParkCard>
                ))
            }
        </SafeAreaView>
    )
}