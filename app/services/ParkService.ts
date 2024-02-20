import axios from "axios";
import { ParkData } from "../interfaces/ParkInterface";
import { ErrorResponse } from "../interfaces/ResponseBodies/ErrorResponse";

export class ParkService {

    baseUrl = "http://localhost:3000";

    public async getAllParks() {
        try {
            const response = await axios.get<ParkData>(`${this.baseUrl}/api/park`, {headers: {requiresAuth: true}});
            return response.data;
        } catch (error) {
            throw error as ErrorResponse;
        }
    }
}