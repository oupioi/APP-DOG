import axios from 'axios';
import {EventInterface} from '../interfaces/EventInterface'

export class EventService {
    baseUrl = "http://localhost:3000";

    public async getEvents() {
        return await axios.get(`${this.baseUrl}/api/event`);
    }

    public async getEventById(eventId: number) {
        return await axios.get(`${this.baseUrl}/api/event/${eventId}`);
    }

    public async createEvent(data: EventInterface) {
        return await axios.post(`${this.baseUrl}/api/event`, data);
    }

    public async updateEvent(eventId: number, data: EventInterface) {
        return await axios.put(`${this.baseUrl}/api/event/${eventId}`, data);
    }

    public async deleteEvent(eventId: number) {
        return await axios.delete(`${this.baseUrl}/api/event/${eventId}`);
    }

    public async joinEvent(eventId: number) {
        return await axios.post(`${this.baseUrl}/api/event/join/${eventId}`);
    }
}