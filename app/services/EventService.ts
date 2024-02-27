import axios from 'axios';
import { EventInterface,EventData } from '../interfaces/EventInterface'
import { SecureStoreTool } from '../utils/SecureStoreTool';

export class EventService {
    baseUrl = "http://localhost:3000";

    private async getHeaders() {
        const token = await SecureStoreTool.getItem("token");
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    }

    public async getEvents(): Promise<EventData>{
        const headers = await this.getHeaders();
        const events: EventData = await axios.get(`${this.baseUrl}/api/event`, headers).then
        (res => res.data);
        return events;
    }

    public async getEventById(eventId: number) {
        const headers = await this.getHeaders();
        return await axios.get(`${this.baseUrl}/api/event/${eventId}`, headers);
    }

    public async createEvent(data: EventInterface) {
        const headers = await this.getHeaders();
        return await axios.post(`${this.baseUrl}/api/event`, data, headers);
    }

    public async updateEvent(eventId: number, data: EventInterface) {
        const headers = await this.getHeaders();
        return await axios.put(`${this.baseUrl}/api/event/${eventId}`, data, headers);
    }

    public async deleteEvent(eventId: number) {
        const headers = await this.getHeaders();
        return await axios.delete(`${this.baseUrl}/api/event/${eventId}`, headers);
    }

    public async joinEvent(eventId: number) {
        const headers = await this.getHeaders();
        return await axios.post(`${this.baseUrl}/api/event/join/${eventId}`, null, headers);
    }

    public async getAddress(eventId: number) {
        const headers = await this.getHeaders();
        return await axios.get(`${this.baseUrl}/api/event/address/${eventId}`, headers);
    }

    public async getfuturEvent(): Promise<EventData>{
        const headers = await this.getHeaders();
        let e: EventData = { events: [], total_items: 0 };
        await axios.get(`${this.baseUrl}/api/event/future`, headers).then(
            (res) => {
                for (let i = 0; i < res.data.length; i++) {
                    e.events.push(res.data[i]);
                }
                e.total_items = res.data.length;
            }
        )
        return e;
    }

    public async getpastEvent(): Promise<EventData>{
        const headers = await this.getHeaders();
        let e: EventData = { events: [], total_items: 0 };
        await axios.get(`${this.baseUrl}/api/event/past`, headers).then(
            (res) => {
                for (let i = 0; i < res.data.length; i++) {
                    e.events.push(res.data[i]);
                }
                e.total_items = res.data.length;
            }
        )
        return e;
    }
}