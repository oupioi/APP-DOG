import axios from "axios";
import { AlertData } from "../interfaces/AlertInterface";
import { ErrorResponse } from "../interfaces/ResponseBodies/ErrorResponse";

export class AlertService {

    baseUrl = "http://localhost:3000";

    public async getAllAlerts() {
        try {
            const response = await axios.get<AlertData>(`${this.baseUrl}/api/alert`, { headers: { requiresAuth: true } });
            return response.data;
        } catch (error) {
            throw error as ErrorResponse;
        }
    }

}