import axios from "axios";
import { ParkInterface } from "../interfaces/ParkInterface";
import { ErrorResponse } from "../interfaces/ResponseBodies/ErrorResponse";

export class ParkService {

    baseUrl = "http://localhost:3000";

    public async getAllParks() {
        try {
            const response = await axios.get<ParkInterface[]>(`${this.baseUrl}/api/park`, {headers: {requiresAuth: true}});
            return response.data
        } catch(error) {
            throw error as ErrorResponse
        }
    }

    public async getParkById(id: number) {
        try {
            const response = await axios.get<ParkInterface>(`${this.baseUrl}/api/park/${id}`, {headers: {requiresAuth: true}});
            return response.data
        } catch (error) {
            throw error as ErrorResponse
        }
    }
}