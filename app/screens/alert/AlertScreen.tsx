import { useEffect, useState } from "react";
import { AlertInterface } from "../../interfaces/AlertInterface";
import AlertCard from "../../components/AlertCard";
import { AlertService } from "../../services/AlertService";
import { ErrorResponse } from "../../interfaces/ResponseBodies/ErrorResponse";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AlertScreen() {
    const [alerts, setAlerts] = useState<AlertInterface[]>([]);
    const alertService = new AlertService();

    const getAlerts = async () => {
        try {
            const response = await alertService.getAllAlerts();
            console.log(response);
            setAlerts(response.alerts);
            
        } catch (error) {
            throw error as ErrorResponse
        }
    }

    useEffect(() => {
        getAlerts();
    }, []);

    return (
        <SafeAreaView>
            {
                alerts.map((alert: AlertInterface) => (
                    <AlertCard {...alert}/>
                ))
            }
        </SafeAreaView>
    )
}